import axios from "axios";
import { Article, Country } from "@/types";
import { countries } from "@/constants";

interface NewsResponse {
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

export const getNewsByCountry = async (country: Country["name"]) => {
	const countryCode = countries.find(
		(countryItem) => (countryItem.name = country)
	);
	const { data } = await axios.get<NewsResponse>(
		`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${apiKey}`
	);

	return data;
};
