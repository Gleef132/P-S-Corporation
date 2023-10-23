import { IResponse } from '@/models/IResponse'
import { ISort } from '@/models/ISort'
import { IComment, ITraining } from '@/models/ITraining'
import { IPopularTrainings } from '@/models/ITrainings'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

interface IPageCountTrainings {
	data: ITraining[];
	countPages: number;
}

interface ICommentsResponse {
	data: IComment[];
	countComments: number;
	countCommentsPages: number;
}

interface IComments {
	page: number;
	limit: number;
	id: string;
}


export const trainingApi = createApi({
	reducerPath: 'trainingApi',
	baseQuery: fetchBaseQuery({ baseUrl: `${process.env.SERVER_API}/api` }),
	extractRehydrationInfo(action) {
		if (action.type === HYDRATE) {
			return action.payload.api
		}
	},
	tagTypes: ['Trainings', 'Comments'],
	endpoints: build => ({
		fetchPopularTrainings: build.query<IPopularTrainings, string>({
			query: () => ({
				url: '/trainings-popular',
				method: 'GET',
			})
		}),
		fetchTrainings: build.query<IPageCountTrainings, ISort>({
			query: ({ limit, page, sortBy, sortOption }) => ({
				url: `/trainings?limit=${limit}&page=${page}`,
				method: 'GET',
				headers: {
					search: '',
					sort_by: sortBy,
					sort_option: sortOption,
				}
			}),
			providesTags: result => ['Trainings']
		}),
		fetchMyTrainings: build.query<IPageCountTrainings, ISort>({
			query: ({ limit, page, sortBy }) => ({
				url: `/my-trainings?limit=${limit}&page=${page}`,
				method: 'GET',
				headers: {
					authorization: `Bearer ${localStorage.getItem('token')}`,
					sort_by: sortBy,
				}
			}),
			providesTags: result => ['Trainings']
		}),
		fetchSearchTrainings: build.query<IPageCountTrainings, any[]>({
			query: (params) => ({
				url: `/search-trainings?limit=${params[0]}&page=${params[1]}`,
				headers: {
					search: params[2]
				}
			})
		}),
		createComment: build.mutation<IResponse, IComment>({
			query: (comment) => ({
				url: '/create-comment',
				method: 'PUT',
				body: comment,
			}),
			invalidatesTags: ['Comments']
		}),
		trainingViewed: build.mutation<IResponse, string>({
			query: (id) => ({
				url: '/training-viewed',
				method: 'PUT',
				headers: {
					id: id
				}
			}),
			invalidatesTags: ['Trainings']
		}),
		createTraining: build.mutation<IResponse, any>({
			query: (training) => ({
				url: '/create-training',
				method: 'POST',
				body: training,
				headers: {
					authorization: `Bearer ${localStorage.getItem('token')}`
				}
			}),
			invalidatesTags: ['Trainings']
		}),
		deleteTraining: build.mutation<IResponse, string>({
			query: (id) => ({
				url: '/delete-training',
				method: 'DELETE',
				headers: {
					id: id
				}
			}),
			invalidatesTags: ['Trainings']
		}),
		getComments: build.query<ICommentsResponse, IComments>({
			query: ({ id, page, limit }) => ({
				url: `/comments?limit=${limit}&page=${page}`,
				method: 'GET',
				headers: {
					id: id
				}
			}),
			providesTags: result => ['Comments']
		}),
		getAllTitles: build.query<string[], string>({
			query: () => ({
				url: '/titles',
				method: 'GET',
			}),
		}),
	})
})