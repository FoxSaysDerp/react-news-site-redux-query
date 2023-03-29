import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { Button } from "@mantine/core";
import { Country } from "@/types";
import { getFlagEmoji, generateSlug } from "@/utilities";
import s from "./CountryList.module.scss";

interface WrapperProps {
	header: string;
	countries: Country[];
	hiddenCountries: Country[];
	countryLimit?: number;
}

type InsideComponentsProps = Omit<WrapperProps, "header">;

interface InsideExpandableComponentProps extends InsideComponentsProps {
	isExpanded: boolean;
	handleExpansion: () => void;
}

interface ItemProps {
	country: Country;
}

const CountryListItem: FC<ItemProps> = (props: ItemProps) => {
	const { country } = props;
	return (
		<li className={s.countryListItem}>
			<Link
				to={`/country/${country.slug}`}
				className={`${s.countryListItemLink}`}
			>
				<span>{getFlagEmoji(country.code)}</span>
				<span>{country.name}</span>
			</Link>
		</li>
	);
};

const CountryListNonExpandable: FC<InsideComponentsProps> = (
	props: InsideComponentsProps
) => {
	const { countries, hiddenCountries } = props;
	return (
		<ul>
			{countries.map((country) => {
				if (!hiddenCountries.includes(country)) {
					return <CountryListItem key={country.code} country={country} />;
				}
			})}
		</ul>
	);
};

const CountryListExpandable: FC<InsideExpandableComponentProps> = (
	props: InsideExpandableComponentProps
) => {
	const {
		countries,
		hiddenCountries,
		isExpanded,
		handleExpansion,
		countryLimit,
	} = props;
	return (
		<ul className={s.countryListWrapper}>
			{countries.map((country, index) => {
				if (hiddenCountries.includes(country)) {
					return null;
				}
				if (!isExpanded) {
					if (index < (countryLimit || 9) - 1) {
						return (
							<CountryListItem key={country.code} country={country} />
						);
					}
					return null;
				}
				return <CountryListItem key={country.code} country={country} />;
			})}
			{!isExpanded && <span className={s.countryListGradient} aria-hidden />}
			<div className={s.expansionButtonWrapper}>
				{isExpanded ? (
					<Button
						variant="default"
						color="dark"
						size="md"
						onClick={handleExpansion}
						className={s.expansionButton}
					>
						<MdExpandLess />
						<span>Hide</span>
					</Button>
				) : (
					<Button
						variant="default"
						color="dark"
						size="md"
						onClick={handleExpansion}
						className={s.expansionButton}
					>
						<MdExpandMore />
						<span>Expand</span>
					</Button>
				)}
			</div>
		</ul>
	);
};

export const CountryList: FC<WrapperProps> = (props: WrapperProps) => {
	const { header, countries, hiddenCountries, countryLimit } = props;
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	const handleExpansion = (): void => {
		setIsExpanded((prevState) => !prevState);
	};

	if (countries.length === 0) {
		<>
			<h2 className={s.countryListHeader}>{header}</h2>
			<p>no countries {":("}</p>
		</>;
	}

	return (
		<>
			<h2 className={s.countryListHeader}>{header}</h2>
			{countries.length > (countryLimit || 10) ? (
				<CountryListExpandable
					isExpanded={isExpanded}
					handleExpansion={handleExpansion}
					countries={countries}
					hiddenCountries={hiddenCountries}
					countryLimit={countryLimit}
				/>
			) : (
				<CountryListNonExpandable
					countries={countries}
					hiddenCountries={countries}
				/>
			)}
		</>
	);
};
