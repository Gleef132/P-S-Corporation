import Comment from '@/components/comment/Comment'
import { useAppSelector } from '@/hooks/redux'
import useAutosizeTextArea from '@/hooks/useAutosizeTextArea'
import useObserver from '@/hooks/useObserver'
import { IComment, ITraining } from '@/models/ITraining'
import { trainingApi } from '@/services/TrainingService'
import React, { FC, useEffect, useRef, useState } from 'react'
import cl from './Training.module.scss'

const Training: FC<ITraining> = (training) => {

	const [value, setValue] = useState<string>('')
	const [isCommentCreated, setIsCommentCreated] = useState<boolean>(false)
	const [commentActive, setCommentActive] = useState<boolean>(false)
	const [comments, setComments] = useState<IComment[]>([])
	const { profileImg, userName } = useAppSelector(state => state.authReducer)
	const [saveComment] = trainingApi.useCreateCommentMutation()
	const [limit, setLimit] = useState<number>(10)
	const [page, setPage] = useState<number>(1)
	const { data, isFetching, isLoading, refetch } = trainingApi.useGetCommentsQuery({ id: training._id, limit: limit, page: page })
	const { isAuth } = useAppSelector(state => state.authReducer)

	const lastComment = useRef<HTMLDivElement>(null)
	const textAreaRef = useRef<HTMLTextAreaElement>(null)

	const fetchComments = async () => {
		if (isLoading) return;
		if (isFetching) return;
		if (data) {
			if (isCommentCreated) {
				setComments([...comments, data.data[data.data.length - 1]])
				setIsCommentCreated(false)
				return
			}
			if (page === 1) {
				setComments([...data?.data])
			} else {
				setComments([...comments, ...data?.data])
			}
		}
	}

	useObserver(lastComment, page < data?.countCommentsPages!, isFetching, () => {
		setPage(page + 1)
	}, [isFetching])

	useEffect(() => {
		fetchComments()
	}, [page, isFetching])

	const createComment = async () => {
		const comment: IComment = {
			comment: value,
			date: '',
			userName: userName,
			path: profileImg,
			_id: training._id
		}
		await saveComment(comment)
			.unwrap()
			.then(res => {
				setIsCommentCreated(true)
				setValue('')
				refetch()
			})
			.catch(e => console.log(e))
	}

	useEffect(() => {
		if (!isAuth) {
			setCommentActive(false)
		}
	}, [isAuth])

	useAutosizeTextArea(textAreaRef.current, value)

	return <section className={cl.training}>
		<div className={`${cl.training__video__container} _container`}>
			<video className={cl.training__video} src={training.video as string} controls ></video>
		</div>
		<div className={'_container'}>
			<h1 className={cl.training__title}>{training.title}</h1>
			<div className={cl.training__content}>
				<div className={cl.training__top}>
					<p className={cl.training__description}>{training.description}</p>
					<ul className={cl.training__list}>
						<li className={cl.training__link}>Creator: {training.from}</li>
						<li className={cl.training__link}>Reviews: {training.reviews}</li>
						<li className={cl.training__link}>Exercises: {training.amountExercise}</li>
						<li className={cl.training__link}>Traning mode: {training.traningMode}</li>
						<li className={cl.training__link}>Release: 1 Month ago</li>
					</ul>
				</div>
				<div className={cl.training__bottom}>
					<div className={cl.training__comment__body}>
						<div className={cl.training__comments__count}>{data?.countComments} comments</div>
						<div className={cl.training__comment__leave}>
							<div className={cl.training__comment__img}>
								{isAuth ?
									<img src={profileImg} alt=""
										onLoad={(e) => {
											e.currentTarget.style.zIndex = '1';
											(e.currentTarget.parentElement as HTMLElement).style.background = 'none'
										}}
									/> :
									<div className={cl.training__comment__img__imitation}></div>
								}
							</div>
							<div className={cl.training__comment__content}>
								<textarea ref={textAreaRef} className={isAuth ? cl.training__comment__input : `${cl.training__comment__input} ${cl.active}`} placeholder={isAuth ? 'Enter text' : 'You need to register to leave a comment'} disabled={isAuth ? false : true} value={value} onChange={(e) => setValue(e.target.value)}
									onClick={() => setCommentActive(true)}
								/>
								<div className={commentActive ? `${cl.training__comment__btns} ${cl.active}` : cl.training__comment__btns}>
									<button className={cl.training__comment__btn}
										onClick={() => setCommentActive(false)}
									>Cancel</button>
									<button className={cl.training__comment__btn}
										disabled={value.trim() ? false : true}
										onClick={createComment}
									>Leave a comment</button>
								</div>
							</div>
						</div>
						<div className={cl.training__comments}>
							{comments.map(item => {
								return <Comment {...item} key={item._id} />
							})}
							<div ref={lastComment}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
}

export default Training
