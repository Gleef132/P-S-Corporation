import cl from './MyTrainingList.module.scss'
import useObserver from '@/hooks/useObserver'
import { ITraining } from '@/models/ITraining'
import { trainingApi } from '@/services/TrainingService'
import { FC, useEffect, useRef, useState } from 'react'
import TrainingCard from '../TrainingCard/TrainingCard'
import { trainingSlice } from '@/store/reducers/TrainingSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { notFoundSlice } from '@/store/reducers/NotFoundSlice'

interface Props {
	sortBy: string;
}


const MyTrainingList: FC<Props> = ({ sortBy }) => {

	const [trainings, setTrainings] = useState<ITraining[]>([])
	const [firstDataLoaded, setFirstDataLoaded] = useState<boolean>(false)
	const [isLoadingSort, setIsLoadingSort] = useState<boolean>(false)
	const [limit, setLimit] = useState<number>(12)
	const [page, setPage] = useState<number>(1)

	const { data, refetch, isLoading, isFetching } = trainingApi.useFetchMyTrainingsQuery({ limit: limit, page: page, sortBy: sortBy, sortOption: '' })
	const { refechMyTraining } = trainingSlice.actions
	const { isTrainingCreated } = useAppSelector(state => state.trainingReducer)
	const { myTrainingsNotFoundChange } = notFoundSlice.actions
	const dispatch = useAppDispatch()

	const lastElement = useRef<HTMLDivElement>(null)

	const fetchTrainings = async () => {
		if (isLoading) return;
		if (isFetching) return;
		if (data) {
			setIsLoadingSort(false)
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
		if (isTrainingCreated) {
			// if (page === 1) {
			// 	refetch()
			// 		.unwrap()
			// 		.then(res => fetchTrainings())
			// } else {
			// 	setPage(1)
			// }
			setPage(1)
			refetch()
				.unwrap()
				.then(res => {
					console.log('then')
					fetchTrainings()
				})
			dispatch(refechMyTraining(false))
		}
	}, [isTrainingCreated])

	useEffect(() => {
		setIsLoadingSort(true)
		setPage(1)
		fetchTrainings()
	}, [sortBy])

	useEffect(() => {
		if (data) {
			console.log(data.data.length)
			if (data.data.length === 0) {
				dispatch(myTrainingsNotFoundChange(true))
			} else {
				dispatch(myTrainingsNotFoundChange(false))
			}
		}
	}, [data, isTrainingCreated, isLoading, isFetching])

	return (
		<div className={isLoadingSort ? `${cl.cards} ${cl.active}` : cl.cards} >
			{trainings!?.map((item, index) => {
				if (index === 11 && !firstDataLoaded) setFirstDataLoaded(true)
				return <TrainingCard isMyTraining={true} primary={true} training={item} key={item._id} />
			})}
			<div style={{ position: 'absolute', bottom: '-90px', display: firstDataLoaded ? 'block' : 'none' }} ref={lastElement}></div>
		</div>
	)
}

export default MyTrainingList