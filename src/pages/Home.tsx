import { FC, useLayoutEffect } from "react";
import {
	resetCountry,
	setQuery,
	setAmount,
	setNews,
} from "@/redux/store/newsSlice";

import { topics } from "@/constants";
import { getRandomElementFromArray } from "@/utilities";
import { useAppDispatch, useNews } from "@/hooks";
import { NewsComponent } from "@/components/News/NewsComponent";

export const Home: FC = () => {
	const { newsByQuery } = useNews();

	const dispatch = useAppDispatch();

	const searchQuery = getRandomElementFromArray({
		type: "string",
		array: topics,
	});

	const { status, data, error } = newsByQuery(searchQuery);

	useLayoutEffect(() => {
		if (data) {
			dispatch(resetCountry);
			dispatch(setQuery(searchQuery));
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
