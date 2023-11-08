import { FC } from 'react'
import cl from './NotFound.module.scss'
import NotFoundSvg from 'public/not-found.svg'

interface NotFoundProps {
	text: string;
}

const NotFound: FC<NotFoundProps> = ({ text }) => {
	return (
		<div className={cl.content}>
			<NotFoundSvg />
			<h1 className={cl.title}>{text}</h1>
		</div>
	)
}

export default NotFound