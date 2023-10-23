import React, { FC } from 'react'
import cl from './HomeMain.module.scss'
import InstagramLogo from 'public/instagram.svg'
import TwitterLogo from 'public/twitter.svg'
import FacebookLogo from 'public/facebook.svg'
import Image from 'next/image'

const HomeMain: FC = () => {

	return (
		<section className={cl.home} id="home">
			<Image className={cl.home__bg} src={'/home-bg.jpg'} alt='' fill priority />
			<div className={cl.home__container}>
				<div className={cl.home__content}>
					<h1 className={cl.home__title}>Sports and body development, 	proper nutrition for
						better health</h1>
					<p className={cl.home__text}>
						Train anytime, anywhere using a special technique - 	indoors, outdoors and
						online. Methods for the development of any muscle in the body, create
						their methods or daily tasks.
					</p>
					<div className={cl.home__btns}>
						<button className={cl.home__btn}>Start</button>
						<button className={cl.home__btn}>More</button>
					</div>
				</div>
			</div>
			<div className={cl.home__socials}>
				<div className={cl.home__social}>
					<InstagramLogo />
				</div>
				<div className={cl.home__social}>
					<TwitterLogo />
				</div>
				<div className={cl.home__social}>
					<FacebookLogo />
				</div>
			</div>
		</section>
	)
}

export default HomeMain