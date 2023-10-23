import { IMealWeek } from "@/models/IMeal";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface mealState {
	title: string;
	img: string;
	data: IMealWeek[];
}

const initialState: mealState = {
	title: '',
	img: '',
	data: []
}

export const mealSlice = createSlice({
	name: 'popup',
	initialState,
	reducers: {
		changeMealInfo(state, action: PayloadAction<mealState>) {
			state.data = action.payload.data
			state.title = action.payload.title
			state.img = action.payload.img
		}
	}
})

export default mealSlice.reducer