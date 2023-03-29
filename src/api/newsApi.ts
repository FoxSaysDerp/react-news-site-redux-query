import axios from "axios";
import { Article, Country } from "@/types";
import { countries } from "@/constants";

export interface NewsResponse {
	status: string;
	totalResults: number;
	articles: Article[];
}

const apiKey = import.meta.env.VITE_APP_NEWS_API_KEY;

export const getNewsByQuery = async (query: string) => {
	const { data } = await axios.get<NewsResponse>(
		`https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${apiKey}`
	);

	return data;
};

export const getNewsByCountryCode = async (countryCode: Country["code"]) => {
	const { data } = await axios.get<NewsResponse>(
		`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${apiKey}`
	);

	return data;
};
