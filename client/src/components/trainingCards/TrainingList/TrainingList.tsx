import useObserver from '@/hooks/useObserver'
import { ITraining } from '@/models/ITraining'
import { trainingApi } from '@/services/TrainingService'
import { FC, useEffect, useRef, useState } from 'react'
import TrainingCard from '../TrainingCard/TrainingCard'
import cl from './TrainingList.module.scss'
import Loader from '@/components/ui/loader/Loader'

interface Props {
	sortOption: string;
	sortBy: string;
}

const TrainingList: FC<Props> = ({ sortBy, sortOption }) => {

	const [trainings, setTrainings] = useState<ITraining[]>([])
	const [firstDataLoaded, setFirstDataLoaded] = useState<boolean>(false)
	const [isLoadingSort, setIsLoadingSort] = useState<boolean>(false)
	const [limit, setLimit] = useState<number>(12)
	const [page, setPage] = useState<number>(1)

	const { data, refetch, isLoading, isFetching } = trainingApi.useFetchTrainingsQuery({ limit, page, sortBy: sortBy, sortOption: sortOption })

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
		setIsLoadingSort(true)
		setPage(1)
		fetchTrainings()
	}, [sortBy])


	return (
		<div className={isLoadingSort ? `${cl.cards} ${cl.active}` : cl.cards} >
			{trainings!?.map((item, index) => {
				if (index === 11 && !firstDataLoaded) setFirstDataLoaded(true)
				return <TrainingCard isMyTraining={false} primary={true} training={item} key={item._id} />
			})}
			{isLoading && <div className={cl.loader}><Loader /></div>}
			<div style={{ position: 'absolute', bottom: '-90px', display: firstDataLoaded ? 'block' : 'none' }} ref={lastElement}></div>
		</div>
	)
}

export default TrainingList