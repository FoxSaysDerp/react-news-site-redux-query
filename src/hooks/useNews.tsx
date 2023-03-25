import { Country } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { getNewsByQuery, getNewsByCountry } from "../api/newsApi";


export const useNews = () => {
   const HOUR_IN_MILISECONDS = 60 * 60 * 1000;
   const DAY = HOUR_IN_MILISECONDS * 24;

	const newsByQuery = (query: string) => {
		return useQuery({
			queryKey: ["query", query],
			queryFn: async () => await getNewsByQuery(query),
		});
	};

	const newsByCountry = (country: Country["name"]) => {
		return useQuery({
			queryKey: ["country", country],
			queryFn: async () => await getNewsByCountry(country),
         cacheTime: HOUR_IN_MILISECONDS,
         staleTime: DAY,
		});
	};

	return { newsByQuery, newsByCountry };
};
