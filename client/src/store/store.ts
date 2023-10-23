import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import popupReducer from "./reducers/popup/PopupSlice";
import alertReducer from "./reducers/alert/AlertSlice";
import authReducer from "./reducers/auth/AuthSlice";
import mealReducer from './reducers/meal/MealSlice'
import trainingReducer from './reducers/TrainingSlice'
import searchTitleSlice from './reducers/SearchTitleSlice'
import notFoundSlice from './reducers/NotFoundSlice'
import { authApi } from "@/services/UserService";
import { trainingApi } from "@/services/TrainingService";
import { mealApi } from "@/services/MealService";

const rootReducer = combineReducers({
	[authApi.reducerPath]: authApi.reducer,
	[trainingApi.reducerPath]: trainingApi.reducer,
	[mealApi.reducerPath]: mealApi.reducer,
	popupReducer,
	alertReducer,
	authReducer,
	mealReducer,
	trainingReducer,
	searchTitleSlice,
	notFoundSlice,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({ serializableCheck: false }).concat(authApi.middleware, trainingApi.middleware, mealApi.middleware)
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']