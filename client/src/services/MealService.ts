import { IMeals } from '@/models/IMeals'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const mealApi = createApi({
	reducerPath: 'mealApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
	endpoints: build => ({
		fetchNutritions: build.query<IMeals, string>({
			query: () => ({
				url: '/meals'
			})
		})
	})
})