import Image from 'next/image'
import { FC } from 'react'
import cl from './AboutSponsor.module.scss'
import Adidas from 'public/adidas.svg'
import Google from 'public/google.svg'
import Xbox from 'public/xbox.svg'
import Puma from 'public/puma.svg'
import Github from 'public/github.svg'

const AboutSponsor: FC = () => {
	return <div className={cl.about}>
		<Image className={cl.about__bg} src={'/sponsor-bg.jpg'} alt='' fill />
		<div className={'_container'}>
			<div className={cl.about__content}>
				<h1 className={cl.about__title}>OUR SPONSORS</h1>
				<h3 className={cl.about__subtitle}>Meet Some Of Our Great Sponsors</h3>
				<div className={cl.about__items}>
					<div className={cl.about__item}>
						<Adidas />
					</div>
					<div className={cl.about__item}>
						<Google />
					</div>
					<div className={cl.about__item}>
						<Xbox />
					</div>
					<div className={cl.about__item}>
						<Puma />
					</div>
					<div className={cl.about__item}>
						<Github />
					</div>
				</div>
				<button className={cl.about__btn}><span>BECOME A SPONSORS</span></button>
			</div>
		</div>
	</div>
}

export default AboutSponsor