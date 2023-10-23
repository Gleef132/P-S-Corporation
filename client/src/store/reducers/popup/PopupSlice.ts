import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import React from "react";

interface PopupState {
	// isLoginPopupActive: boolean;
	// isMealPopupActive: boolean;
	// isMealGenderPopupActive: boolean;
	isMobileMenuActive?: boolean;
	isPopupActive: boolean;
	popupChildren: React.ReactNode;
}

const initialState: PopupState = {
	// isLoginPopupActive: false,
	// isMealPopupActive: false,
	// isMealGenderPopupActive: true,
	isMobileMenuActive: false,
	isPopupActive: false,
	popupChildren: '',
}

export const popupSlice = createSlice({
	name: 'popup',
	initialState,
	reducers: {
		// toggleActiveLoginPopup(state, action: PayloadAction<boolean>) {
		// 	state.isLoginPopupActive = action.payload
		// },
		// toggleActiveMealPopup(state, action: PayloadAction<boolean>) {
		// 	state.isMealPopupActive = action.payload
		// },
		// toggleActiveMealGenderPopup(state, action: PayloadAction<boolean>) {
		// 	state.isMealGenderPopupActive = action.payload
		// },
		toggleActiveMobileMenu(state, action: PayloadAction<boolean>) {
			state.isMobileMenuActive = action.payload
		},
		popupSwitch(state, action: PayloadAction<PopupState>) {
			state.isPopupActive = action.payload.isPopupActive
			state.popupChildren = action.payload.popupChildren
		},
	}
})

export default popupSlice.reducer