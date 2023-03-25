import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Article, Country } from "@/types";

export interface NewsState {
	news: Article[];
	country: Country | null;
	query: string | null;
	amount: number;
}

const initialState: NewsState = {
	news: [],
	country: null,
	query: null,
	amount: 0,
};

const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {
		setNews: (state, action: PayloadAction<Article[]>) => {
			state.news = action.payload;
		},
		setCountry: (state, action: PayloadAction<Country>) => {
			state.country = action.payload;
		},
		resetCountry: (state) => {
			state.country = null;
		},
		setQuery: (state, action: PayloadAction<string>) => {
			state.query = action.payload;
		},
		resetQuery: (state) => {
			state.query = null;
		},
		setAmount: (state, action: PayloadAction<number>) => {
			state.amount = action.payload;
		},
	},
});

export const {
	setNews,
	setCountry,
	resetCountry,
	setQuery,
	resetQuery,
	setAmount,
} = newsSlice.actions;
export default newsSlice.reducer;
