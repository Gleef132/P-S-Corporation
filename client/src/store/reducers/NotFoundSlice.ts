import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateProps {
	isSearchNotFound: boolean;
	isMyTrainingsNotFound: boolean;
}

const initialState: initialStateProps = {
	isSearchNotFound: false,
	isMyTrainingsNotFound: false,
}

export const notFoundSlice = createSlice({
	name: 'not-found',
	initialState,
	reducers: {
		searchNotFoundChange(state, action: PayloadAction<boolean>) {
			state.isSearchNotFound = action.payload
		},
		myTrainingsNotFoundChange(state, action: PayloadAction<boolean>) {
			state.isMyTrainingsNotFound = action.payload
		}
	}
})

export default notFoundSlice.reducer