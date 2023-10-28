import { useAppDispatch } from '@/hooks/redux'
import useObserver from '@/hooks/useObserver'
import { ITraining } from '@/models/ITraining'
import { trainingApi } from '@/services/TrainingService'
import { notFoundSlice } from '@/store/reducers/NotFoundSlice'
import { useRouter } from 'next/router'
import { FC, useEffect, useRef, useState } from 'react'
import TrainingCard from '../TrainingCard/TrainingCard'
import cl from './SearchList.module.scss'
import Loader from '@/components/ui/loader/Loader'


const SearchList: FC = () => {
	const [trainings, setTrainings] = useState<ITraining[]>([])
	const [firstDataLoaded, setFirstDataLoaded] = useState<boolean>(false)
	const [limit, setLimit] = useState<number>(12)
	const [page, setPage] = useState<number>(1)
	const { query } = useRouter()

	const { data, refetch, isLoading, isFetching } = trainingApi.useFetchSearchTrainingsQuery([limit, page, query.search_query])

	const dispatch = useAppDispatch()
	const { searchNotFoundChange } = notFoundSlice.actions

	const lastElement = useRef<HTMLDivElement>(null)

	const fetchTrainings = async () => {
		if (isLoading) return;
		if (isFetching) return;
		if (data) {
			if (page === 1) {
				setTrainings([...data?.data])
			} else {
				setTrainings([...trainings, ...data?.data])
			}
		}
	}

	useObserver(lastElement, page < data?.countPages!, isFetching, () => {
		setPage(page + 1)
	}, [isFetching])

	useEffect(() => {
		fetchTrainings()
	}, [page, isFetching])

	useEffect(() => {
		setPage(1)
		fetchTrainings()
	}, [query])

	useEffect(() => {
		if (data) {
			if (data.data.length === 0) {
				dispatch(searchNotFoundChange(true))
			}
		}
	}, [data])


	return (
		<div className={cl.cards} >
			{trainings!?.map((item, index) => {
				if (index === 11 && !firstDataLoaded) setFirstDataLoaded(true)
				return <TrainingCard isMyTraining={false} primary={false} training={item} key={item._id} />
			})}
			{isLoading && <div className={cl.loader}><Loader /></div>}
			<div style={{ position: 'absolute', bottom: '-90px', display: firstDataLoaded ? 'block' : 'none' }} ref={lastElement}></div>
		</div>
	)
}

export default SearchList