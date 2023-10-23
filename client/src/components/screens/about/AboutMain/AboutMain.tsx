import Image from 'next/image'
import { FC } from 'react'
import cl from './AboutMain.module.scss'
import Logo from 'public/logo.svg'

const AboutMain: FC = () => {
	return <section className={cl.about}>
		<Image className={cl.about__bg} src={'/about-bg.jpg'} alt='' fill priority />
		<div className={'_container'}>
			<div className={cl.about__content}>
				<div className={cl.about__logo}>
					<Logo />
				</div>
				<h1 className={cl.about__title}>
					P&S CORPORATION
				</h1>
				<h3 className={cl.about__subtitle}>
					Professionalism at your service
				</h3>
			</div>
		</div>
	</section>
}

export default AboutMain