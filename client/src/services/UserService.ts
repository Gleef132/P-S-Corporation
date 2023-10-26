import { IResponse } from '@/models/IResponse'
import { ISignIn } from '@/models/ISIgnIn'
import { ISignUp } from '@/models/ISignUp'
import { IUser, IUserActivate } from '@/models/IUser'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface IUserCheck {
	message: string;
	isVerified: boolean;
}

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_SERVER_API}` }),
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
		userCheckExist: build.mutation<IUserCheck, string>({
			query: (login) => ({
				url: '/user-check',
				method: 'POST',
				body: {
					login: login
				}
			})
		}),
		userNameCheckExist: build.mutation<IUserCheck, string>({
			query: (userName) => ({
				url: '/username-check',
				method: 'POST',
				body: {
					userName: userName
				}
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
				method: 'GET',
				headers: {
					authorization: `Bearer ${localStorage.getItem('token')}`,
					'Content-Type': 'multipart/form-data',
				}
			})
		})
	})
})