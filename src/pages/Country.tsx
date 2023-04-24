import { FC, useLayoutEffect, useMemo } from "react";
import {
	setAmount,
	setNews,
	resetQuery,
	setCountry,
} from "@/redux/store/newsSlice";
import { useAppDispatch, useNews } from "@/hooks";
import { NewsComponent } from "@/components/News/NewsComponent";
import { useParams } from "react-router-dom";
import { countries } from "@/constants";
import { Country } from "@/types";

export const CountryPage: FC = () => {
	const { country: countrySlug } = useParams();

	const country: Country = useMemo(
		() => countries.find((countryItem) => countryItem.slug === countrySlug),
		[countrySlug]
	);

	if (!country) {
		return <Navigate to="/" />;
	}

	const { newsByCountry } = useNews();
	const dispatch = useAppDispatch();

	const { status, data, error } = newsByCountry(country.code);

	useLayoutEffect(() => {
		if (data) {
			dispatch(resetQuery());
			dispatch(setCountry(country?.name));
			dispatch(setNews(data.articles));
			dispatch(setAmount(data.totalResults));
		}
	}, [data]);

	if (status === "loading") {
		// TODO: Implement Loader
		return <div>Loading...</div>;
	}
	if (status === "error") {
		return <div>Error: {error.message}</div>;
	}

	return <NewsComponent />;
};
