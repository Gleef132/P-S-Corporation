import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PopupState {
	isTrainingCreated: boolean;
}

const initialState: PopupState = {
	isTrainingCreated: false
}

export const trainingSlice = createSlice({
	name: 'training',
	initialState,
	reducers: {
		refechMyTraining(state, action: PayloadAction<boolean>) {
			state.isTrainingCreated = action.payload
		}
	}
})

export default trainingSlice.reducer