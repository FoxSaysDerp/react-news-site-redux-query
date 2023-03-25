import { FC, HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { Country } from "@/types";
import { countries } from "@/constants";
import s from "./Aside.module.scss";
import { CountryList } from "./CountryList";
interface Props extends HTMLAttributes<HTMLDivElement> {
	callback?: Function;
	countries: Country[] 
}

export const Aside: FC<Props> = (props: Props) => {
	const {className} = props;
	return <aside className={`${s.asideContainer} ${className}`}>
		<CountryList countries={countries} hiddenCountries={[]} header="Countries"/>
	</aside>;
};
