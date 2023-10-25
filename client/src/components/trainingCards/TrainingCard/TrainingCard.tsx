import { useAppDispatch } from '@/hooks/redux';
import { ITraining } from '@/models/ITraining'
import { trainingApi } from '@/services/TrainingService';
import { trainingSlice } from '@/store/reducers/TrainingSlice';
import Link from 'next/link'
import React, { FC, useRef, useState } from 'react'
import cl from './TrainingCard.module.scss'

interface Props {
	training: ITraining;
	primary: boolean;
	isMyTraining: boolean;
}

const TrainingCard: FC<Props> = ({ training, primary, isMyTraining }) => {

	const dispatch = useAppDispatch()
	const { refechMyTraining } = trainingSlice.actions
	const [deleteTraining] = trainingApi.useDeleteTrainingMutation()
	const [trainingViewed] = trainingApi.useTrainingViewedMutation()

	const deleteTrainingHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		e.stopPropagation()
		deleteTraining(training._id)
			.unwrap()
			.then(res => dispatch(refechMyTraining(true)))
	}

	const showDeleteHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		e.stopPropagation()
		if (deleteRef.current) {
			(deleteRef.current as HTMLElement).classList.add(cl.active)
		}
	}

	const hiddenDeleteHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		e.stopPropagation()
		if (deleteRef.current) {
			(deleteRef.current as HTMLElement).classList.remove(cl.active)
		}
	}

	const deleteRef = useRef(null)

	return (
		primary === true ?
			<Link href={'/training/' + training._id} className={cl.card} onClick={(e) => trainingViewed(training._id)} >
				<div className={cl.card__img}>
					<img src={training.path as string} alt="" className={cl.card__img} onLoad={(e) => {
						e.currentTarget.style.zIndex = '1';
						(e.currentTarget.parentElement as HTMLElement).style.background = 'none'
					}} />
					{isMyTraining ?
						<div className={cl.card__delete} ref={deleteRef}>
							<p className={cl.card__delete__text}>Are you sure you want to delete this?</p>
							<div className={cl.card__delete__btns}>
								<button className={cl.card__delete__btn} onClick={deleteTrainingHandle}>Confrim</button>
								<button className={cl.card__delete__btn} onClick={hiddenDeleteHandle}>Cancel</button>
							</div>
						</div> : null
					}
				</div>
				<div className={cl.card__title}>{training.title}</div>
				<div className={cl.card__chanel}>{training.from}</div>
				<div className={cl.card__reviews}><span>{training.reviews} reviews</span>{isMyTraining ?
					<button className="" onClick={showDeleteHandle}>delete</button>
					: null
				}</div>
			</Link>
			:
			<Link href={'/training/' + training._id} className={`${cl.card} ${cl.card__secondary}`} onClick={(e) => trainingViewed(training._id)} >
				<div className={cl.card__img}>
					<img src={training.path as string} alt="" className={cl.card__img} onLoad={(e) => {
						e.currentTarget.style.zIndex = '1';
						(e.currentTarget.parentElement as HTMLElement).style.background = 'none'
					}} />
				</div>
				<div className={cl.card__right}>
					<div className={cl.card__title}>{training.title}</div>
					<div className={cl.card__reviews}>{training.reviews} reviews</div>
					<div className={cl.card__chanel}>{training.from}</div>
					<div className={cl.card__description}>{training.description}</div>
				</div>
			</Link>
	)
}

export default TrainingCard