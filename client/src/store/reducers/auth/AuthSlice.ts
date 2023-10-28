import { ISignIn } from "@/models/ISIgnIn";
import { ISignUp } from "@/models/ISignUp";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface authState {
	isAuth: string | null;
	isRefetch: boolean;
	profileImg: string;
	login: string | null;
	password: string;
	userName: string;
	email: string;
}

const initialState: authState = {
	isAuth: typeof window !== 'undefined' ? localStorage.getItem('token') : '',
	profileImg: '',
	login: typeof window !== 'undefined' ? localStorage.getItem('login') : '',
	password: '',
	email: '',
	userName: '',
	isRefetch: false,
}


export const authSlice = createSlice({
	name: 'isAuth',
	initialState,
	reducers: {
		userEnter(state, action: PayloadAction<string>) {
			state.isAuth = action.payload
			localStorage.setItem('token', action.payload)
			localStorage.setItem('login', state.login as string)
		},
		userExit(state, action: PayloadAction<string>) {
			state.isAuth = ''
			state.profileImg = ''
			state.userName = ''
			state.email = ''
			state.login = ''
			state.password = ''
			localStorage.removeItem('token')
			localStorage.removeItem('login')
		},
		userLoginStore(state, action: PayloadAction<ISignIn>) {
			state.login = action.payload.login
			state.password = action.payload.password
			localStorage.setItem('login', action.payload.login)
		},
		userRegistrationStore(state, action: PayloadAction<ISignUp>) {
			state.login = action.payload.login
			state.password = action.payload.password
			state.userName = action.payload.userName
			state.email = action.payload.email
			localStorage.setItem('login', action.payload.login)
		},
		userChangeProfileData(state, action: PayloadAction<boolean>) {
			state.isRefetch = action.payload
		},
		userDataSave(state, action: PayloadAction<string[]>) {
			state.profileImg = action.payload[0]
			state.userName = action.payload[1]
		}
	}
})

export default authSlice.reducer