import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface alertState {
	message: string;
	isActive: boolean;
	textColor: string;
}


const initialState: alertState = {
	message: '',
	isActive: false,
	textColor: '',
}

export const alertSlice = createSlice({
	name: 'alert',
	initialState,
	reducers: {
		toggleAlertActive(state, action: PayloadAction<alertState>) {
			state.message = action.payload.message
			state.isActive = action.payload.isActive
			state.textColor = action.payload.textColor
		}
	}
})

export default alertSlice.reducer