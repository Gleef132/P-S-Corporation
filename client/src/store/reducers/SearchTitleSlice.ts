import { ISearchTitles } from "@/models/ISearchTitles";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ISearchTitles = {
	titles: [],
	isLoading: false,
	error: '',
}

export const searchTitleSlice = createSlice({
	name: 'titles',
	initialState,
	reducers: {
		saveSearchTitles(state, action: PayloadAction<ISearchTitles>) {
			state.titles = action.payload.titles
			state.isLoading = action.payload.isLoading
			state.error = action.payload?.error
		},
		changeIsLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload
		},
		changeError(state, action: PayloadAction<string | any>) {
			state.error = action.payload
		}

	}
})

export default searchTitleSlice.reducer