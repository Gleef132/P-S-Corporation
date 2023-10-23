import { FC } from 'react'
import cl from './Footer.module.scss'

const Footer: FC = () => {
	return <footer className={cl.footer}>
		<p className={cl.footer__text}>2023 © P&S Corporation All Right Reserved</p>
	</footer>
}

export default Footer