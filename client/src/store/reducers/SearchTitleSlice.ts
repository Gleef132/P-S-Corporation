import { ISearchTitles } from "@/models/ISearchTitles";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ISearchTitles = {
	titles: []
}

export const searchTitleSlice = createSlice({
	name: 'titles',
	initialState,
	reducers: {
		saveSearchTitles(state, action: PayloadAction<string[]>) {
			state.titles = action.payload
		}
	}
})

export default searchTitleSlice.reducer