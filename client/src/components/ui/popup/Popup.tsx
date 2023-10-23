import { useAppSelector } from '@/hooks/redux'
import { FC } from 'react'
import cl from './Popup.module.scss'

const Popup: FC = () => {

	const { popupChildren, isPopupActive } = useAppSelector(state => state.popupReducer)

	return (
		<div className={isPopupActive ? `${cl.popup} ${cl.active}` : cl.popup}>
			{popupChildren}
		</div>
	)
}

export default Popup