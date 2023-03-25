import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type View = "list" | "tiles";

export interface ViewState {
	view: View;
}

const initialState: ViewState = {
	view: "list",
};

const viewSlice = createSlice({
	name: "view",
	initialState,
	reducers: {
		setView: (state, action: PayloadAction<View>) => {
			state.view = action.payload;
		},
	},
});

export const { setView } = viewSlice.actions;
export default viewSlice.reducer;
