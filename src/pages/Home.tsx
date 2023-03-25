import { useLayoutEffect, useMemo } from "react";
import {
	resetCountry,
	setQuery,
	setAmount,
	setNews,
} from "@/redux/store/newsSlice";

import { topics } from "@/constants";
import { getRandomElementFromArray } from "@/utilities";
import { useAppDispatch, useNews } from "@/hooks";

export const Home = () => {
	const { newsByQuery } = useNews();

	const searchQuery = useMemo(
		() =>
			getRandomElementFromArray({
				type: "string",
				array: topics,
			}),
		[]
	);
	const { status, data, error } = newsByQuery("bitcoin");

	const dispatch = useAppDispatch();

	useLayoutEffect(() => {
		if (data) {
			dispatch(setQuery(searchQuery));
			dispatch(setNews(data.articles));
			dispatch(setAmount(data.totalResults));
			dispatch(resetCountry);
		}
	}, [data]);

	if (status === "loading") {
		// TODO: Implement Loader
		return <div>Loading...</div>;
	}
	if (status === "error") {
		return <div>Error: {error.message}</div>;
	}

	return <div>Home</div>;
};
