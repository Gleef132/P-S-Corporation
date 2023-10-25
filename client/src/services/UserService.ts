import { IResponse } from '@/models/IResponse'
import { ISignIn } from '@/models/ISIgnIn'
import { ISignUp } from '@/models/ISignUp'
import { IUser, IUserActivate } from '@/models/IUser'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({ baseUrl: `${process.env.SERVER_API}` }),
	endpoints: build => ({
		userRegistration: build.mutation<IResponse, ISignUp>({
			query: (user) => ({
				url: '/registration',
				method: 'POST',
				body: user
			})
		}),
		userLogin: build.mutation<IResponse, ISignIn>({
			query: (user) => ({
				url: '/login',
				method: 'POST',
				body: user
			})
		}),
		userActivate: build.mutation<IResponse, IUserActivate>({
			query: (emailData) => ({
				url: '/activate',
				method: 'POST',
				body: emailData
			})
		}),
		userChangeData: build.mutation<IResponse, FormData>({
			query: (user) => ({
				url: '/user-change',
				method: 'PUT',
				body: user,
				headers: {
					authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})
		}),
		getUser: build.query<IUser, string>({
			query: () => ({
				url: '/user',
				headers: {
					authorization: `Bearer ${localStorage.getItem('token')}`,
					'Content-Type': 'multipart/form-data',
				}
			})
		})
	})
})