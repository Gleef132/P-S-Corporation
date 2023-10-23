import NavLink from '@/components/ui/nav-link/NavLink'
import React, { FC, useRef, useState } from 'react'
import cl from './MyTrainings.module.scss'
import Helper, { RefType } from '@/components/ui/helper/Helper'
import MyTrainingList from '@/components/trainingCards/MyTrainingList/MyTrainingList'
import CreateTrainingForm from '@/components/form/create-training-form/CreateTrainingForm'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import NotFound from '@/components/ui/not-found/NotFound'
import { popupSlice } from '@/store/reducers/popup/PopupSlice'

const MyTrainings: FC = () => {

	const [navActiveValue, setNavActiveValue] = useState<string>('New')

	const dispatch = useAppDispatch()
	const { popupSwitch } = popupSlice.actions
	const { isMyTrainingsNotFound } = useAppSelector(state => state.notFoundSlice)

	const helperRef = useRef<RefType>(null)



	const showHelper = (e: React.MouseEvent<HTMLDivElement>) => {
		if (helperRef.current) {
			helperRef.current.showHelper(e)
		}
	}

	const setHelperText = (value: React.ReactNode) => {
		if (helperRef.current) {
			helperRef.current.setValue(value)
		}
	}

	const hiddenHelper = () => {
		if (helperRef.current) {
			helperRef.current.hiddenHelper()
		}
	}

	return (
		<section className={cl.training}>
			<div className={'_container'}>
				<div className={cl.training__content}>
					<h1 className={cl.training__title}>My Trainings</h1>
					<nav className={cl.training__nav}>
						<ul className={cl.training__list}>
							<NavLink childer='Add Training' isActive={false} secondary={true} onClick={() => dispatch(popupSwitch({
								isPopupActive: true, popupChildren:
									<CreateTrainingForm hiddenHelper={hiddenHelper} setHelperText={setHelperText} showHelper={showHelper} />
							}))} />
							<NavLink childer='New' isActive={'New' === navActiveValue} onClick={() => setNavActiveValue('New')} />
							<NavLink childer='Popularity' isActive={'Popularity' === navActiveValue} onClick={() => setNavActiveValue('Popularity')} />
						</ul>
					</nav>
					{isMyTrainingsNotFound ?
						<NotFound text='Upload your first workout' />
						:
						<div className="">
							<MyTrainingList sortBy={navActiveValue} />
						</div>
					}
				</div>
			</div>
			<Helper ref={helperRef}></Helper>
		</section>
	)
}

export default MyTrainings