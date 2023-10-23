import React, { FC, PropsWithChildren } from 'react'
import cl from './Button.module.scss'

interface IButton {
	type: string;
	disable?: boolean;
	clName?: string;
	onClick?: () => void;
}

const Button: FC<PropsWithChildren<IButton>> = ({ children, onClick, type, disable, clName }) => {

	const buttonClickHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		if (onClick) onClick()
	}

	switch (type) {
		case 'primary':
			return <button disabled={disable} onClick={(e) => buttonClickHandle(e)} className={`${cl.btn} ${cl.btn__primary} ${clName}`} >{children}</button>
			break;
		case 'secondary':
			return <button disabled={disable} onClick={onClick} className={`${cl.btn} ${cl.btn__secondary} ${clName}`} >{children}</button>
			break;
		default:
			return <div></div>
			break;
	}

}

export default Button