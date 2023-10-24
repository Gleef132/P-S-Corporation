import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { alertSlice } from '@/store/reducers/alert/AlertSlice'
import { FC, useEffect } from 'react'
import cl from './Alert.module.scss'

const Alert: FC = () => {

	const dispatch = useAppDispatch()
	const { message, isActive, textColor } = useAppSelector(state => state.alertReducer)
	const { toggleAlertActive } = alertSlice.actions

	useEffect(() => {
		const timeout = setTimeout(() => {
			dispatch(toggleAlertActive({ message: '', isActive: false, textColor: '' }))
		}, 5000);

		return () => {
			clearTimeout(timeout)
		}
	}, [message])

	return (
		<div className={isActive ? `${cl.alert} ${cl.active}` : cl.alert}>
			<h2 className={cl.alert__text} style={{ color: textColor }} >{message}</h2>
		</div>
	)
}

export default Alert