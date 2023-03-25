import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./viewSlice";
import newsReducer from "./newsSlice";

export const store = configureStore({
	reducer: {
		view: viewReducer,
		news: newsReducer
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
