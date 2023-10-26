import Popup from '@/components/ui/popup/Popup'
import { FC, useState } from 'react'
import cl from './CreateTrainingForm.module.scss'
import LoaderArrow from '/public/loader-arrow.svg'
import ImageSvg from '/public/image.svg'
import HelpSvg from '/public/help.svg'
import { trainingApi } from '@/services/TrainingService'
import CreateTrainingInput from '../create-training-input/CreateTrainingInput'
import CreateTrainingCheckbox from '../create-training-checkbox/CreateTrainingCheckbox'
import { trainingSlice } from '@/store/reducers/TrainingSlice'
import { useAppDispatch } from '@/hooks/redux'
import { popupSlice } from '@/store/reducers/popup/PopupSlice'
import { notFoundSlice } from '@/store/reducers/NotFoundSlice'
import Loader from '@/components/ui/loader/Loader'

interface Props {
	showHelper: (e: React.MouseEvent<HTMLDivElement>) => void;
	hiddenHelper: () => void;
	setHelperText: (text: React.ReactNode) => void;
}

const CreateTrainingForm: FC<Props> = ({ hiddenHelper, showHelper, setHelperText }) => {

	// const [modalActive, setModalActive] = useState<boolean>(false)
	const [loaderActive, setLoaderActive] = useState<boolean>(false)
	const [activeContent, setActiveContent] = useState<number>(1)
	const [videoFile, setVideoFile] = useState<File>()
	const [videoFilePath, setVideoFilePath] = useState<string>('')
	const [videoFileName, setVideoFileName] = useState<string>('Video upload')
	const [videoPoster, setVideoPoster] = useState<File>()
	const [videoPosterPath, setVideoPosterPath] = useState<string>('')
	const [description, setDescription] = useState<string>('')
	const [level, setLevel] = useState<string>('')
	const [gender, setGender] = useState<string>('Both')
	const [mode, setMode] = useState<string>('')
	const [amountExercises, setAmountExercises] = useState<string>('')
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isError, setIsError] = useState<boolean>(false)
	const [errorText, setErrorText] = useState<boolean>(false)



	const dispatch = useAppDispatch()
	const [createTraining] = trainingApi.useCreateTrainingMutation()
	const { refechMyTraining } = trainingSlice.actions
	const { popupSwitch } = popupSlice.actions
	const { myTrainingsNotFoundChange } = notFoundSlice.actions


	const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const file = e.target.files[0]
			setVideoFile(file)
			setVideoFilePath(URL.createObjectURL(file))
			setLoaderActive(true)
			setTimeout(() => {
				setVideoFileName(file.name as string)
				setLoaderActive(false)
				setActiveContent(2)
			}, 3000);
		}
	}

	const createTrainingHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setIsLoading(true)

		const data = new FormData()
		data.append('amountExercise', amountExercises)
		data.append('level', level)
		data.append('comments', '[]')
		data.append('description', description)
		data.append('from', '')
		data.append('video', videoFile as Blob)
		data.append('path', videoPoster as Blob)
		data.append('reviews', '0')
		data.append('title', videoFileName)
		data.append('trainingMode', mode)
		data.append('gender', gender)


		createTraining(data)
			.unwrap()
			.then(res => {
				dispatch(myTrainingsNotFoundChange(false))
				dispatch(refechMyTraining(true))
				dispatch(popupSwitch({ isPopupActive: false, popupChildren: '' }))
				setIsLoading(false)
			})
			.catch(e => {
				setIsError(true)
				setErrorText(e.data.message)
			})
	}

	return <form className={cl.form} onClick={(e) => e.stopPropagation()} >
		<div className={cl.form__head}>
			<h2 className={cl.form__title}>{videoFileName}</h2>
			<div className={cl.form__close} onClick={() => dispatch(popupSwitch({ isPopupActive: false, popupChildren: '' }))}></div>
		</div>
		{activeContent === 1 ?
			<div className={cl.form__content}>
				<div className={loaderActive ? `${cl.form__loader} ${cl.active} ` : cl.form__loader}>
					<div className={cl.form__loader__rain}>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</div>
					<div className={cl.form__loader__rain}>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</div>
					<div className={cl.form__loader__rain}>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</div>
					<div className={cl.form__loader__arrow}>
						<LoaderArrow />
					</div>
				</div>
				<p className={cl.form__text}>Drag and drop files here or click the button below to select them on your computer.</p>
				<div className={cl.form__subtitle}>Until you publish the video, access to them will be limited.</div>
				<input type="file" accept='.mp4,.mp3' id="selectVideo" className={cl.form__file} onChange={fileChange} />
				<label htmlFor="selectVideo" className={cl.form__btn}>
					Select video
				</label>
			</div> :
			<div className={`${cl.form__content} ${cl.silver}`}>
				<div className={cl.form__title} style={{ padding: '30px 0 15px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >Information</div>
				<div className={cl.form__body}>
					<div className={cl.form__left}>
						<CreateTrainingInput text={videoFileName} counter={100} helpText={`Bright calls to attract attention. It's a great idea to include keywords in the title of your video that viewers are looking for to search for content.`} setText={setVideoFileName} title={`Name (required field) `} placeholder={'Enter a name. If you want to mention another author, enter the "@" symbol, followed by the name of the channel.'} id={'createTrainingTextarea_1'} isDescription={false} helperMouseEnter={showHelper} helperMouseLeave={hiddenHelper} setHelperText={setHelperText} />
						<CreateTrainingInput text={description} counter={5000} helpText={'If you want the video to be easier to find, add keywords to its description (preferably at the beginning) and write about the video.'} setText={setDescription} title={'Description'} placeholder={'Tell us what your video is about. If you want to mention another author, enter the "@" symbol, followed by the name of the channel.'} isDescription={true} id={'createTrainingTextarea_2'}
							helperMouseEnter={showHelper} helperMouseLeave={hiddenHelper} setHelperText={setHelperText} />
						<div className={cl.form__item}>
							<div className={cl.form__item__title}
							>Icon (required field) </div>
							<div className={cl.form__item__text}>Upload an icon, it should grab the attention of viewers and reflect the content of the video.</div>
							<div className={cl.form__icon__btn}>
								<label htmlFor="createTrainingIcon">
									<ImageSvg />
									Loading icon
									<input type="file" id="createTrainingIcon" accept='.jpg,.png'
										onChange={(e) => {
											if (e.target.files) {
												const file = e.target.files[0]
												setVideoPoster(file)
												setVideoPosterPath(URL.createObjectURL(file))
											}
										}}
									/>
								</label>
								<div className={cl.form__icon__helper} onMouseEnter={((e) => {
									showHelper(e)
									setHelperText(<div>
										<div>Recomendations</div>
										<ul className={cl.helper__list}>
											<li className={cl.helper__link}>Resolution: 1280 x 720 pixels (16:9).</li>
											<li className={cl.helper__link}>Maximum file size: 2 MB.</li>
											<li className={cl.helper__link}>Supported formats: JPG, PNG.</li>
											<li className={cl.helper__link}>The image must comply with the rules of the community.</li>
										</ul>
									</div>)
								})}
									onMouseLeave={(e) => {
										hiddenHelper()
									}} >
									<HelpSvg />
								</div>
							</div>
						</div>
						<div className={cl.form__item}>
							<div className={cl.form__item__title}>Level (required field) </div>
							<div className={cl.form__item__text}>
								Select one of the training difficulties. This will make it easier for the user to select the desired one.
							</div>
							<CreateTrainingCheckbox checked={level} id='levelRadioEasy' name='radioLevel' text='Level Easy' onChange={setLevel} type="Easy" />
							<CreateTrainingCheckbox checked={level} id='levelRadioNormal' name='radioLevel' text='Level Normal' onChange={setLevel} type="Normal" />
							<CreateTrainingCheckbox checked={level} id='levelRadioHard' name='radioLevel' text='Level Hard' onChange={setLevel} type="Hard" />
						</div>
						<div className={cl.form__item}>
							<div className={cl.form__item__title}>Gender</div>
							<div className={cl.form__item__text}>
								Choose the gender of who your training is suitable for. This will make it easy for users to choose the right training.
							</div>
							<CreateTrainingCheckbox checked={gender} id='genderRadioBoth' name='radioGender' text='Both' onChange={setGender} type="Both" />
							<CreateTrainingCheckbox checked={gender} id='genderRadioMale' name='radioGender' text='Male' onChange={setGender} type="Male" />
							<CreateTrainingCheckbox checked={gender} id='genderRadioFemale' name='radioGender' text='Female' onChange={setGender} type="Female" />
						</div>
						<div className={cl.form__item}>
							<div className={cl.form__item__title}>Amount Exercises (required field) </div>
							<div className={cl.form__item__text}>
								Write how many exercises are in your workout so that users can find suitable workouts.
							</div>
							<input type="text" placeholder='Enter the number' className={cl.form__item__input} onChange={(e) =>
								setAmountExercises(e.target.value.replace(/[^0-9,\s]/g, "").trim())}
								value={amountExercises}
							/>
						</div>
						<div className={cl.form__item}>
							<div className={cl.form__item__title}>
								Training Mode (required field)
							</div>
							<div className={cl.form__item__text}>
								Write how many times a week users should exercise. This will help them understand if your workouts are suitable.
							</div>
							<input type="text" placeholder='Enter the number' className={cl.form__item__input} value={mode}
								onChange={(e) => setMode(e.target.value.replace(/[^0-9,\s]/g, "").trim())}
							/>
						</div>
					</div>
					<div className={cl.form__right}>
						<div className={cl.form__video}>
							<video controls src={videoFilePath} poster={videoPosterPath}></video>
							<div className={cl.form__video__title}>
								File name
							</div>
							<p className={cl.form__video__text}>{videoFile?.name}</p>
						</div>
					</div>
				</div>
			</div>
		}
		<div className={cl.form__footer}>
			By submitting a video, you agree to the Terms of Service and Community Guidelines P&S Corporation.
			{activeContent === 2 ? <button onClick={createTrainingHandle} className={cl.form__btn} disabled={videoFileName && videoPosterPath && level && amountExercises && mode ? false : true} >Create</button>
				: null
			}
		</div>
		{isLoading ?
			<div className={cl.loader__wrapper}>
				<div className={cl.loader}>
					{isError ?
						<>{errorText}</>
						:
						<>Creating
							<Loader /></>
					}
				</div>
			</div> : null
		}
	</form>
}

export default CreateTrainingForm