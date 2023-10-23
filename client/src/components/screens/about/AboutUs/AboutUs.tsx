import { FC } from 'react'
import cl from './AboutUs.module.scss'
import Logo from 'public/logo.svg'
import Image from 'next/image'

const AboutUs: FC = () => {
	return <div className={cl.about}>
		<div className={'_container'}>
			<div className={cl.about__content}>
				<div className={cl.about__items}>
					<div className={cl.about__item}>
						<h1 className={cl.about__title}>ABOUT US</h1>
						<h3 className={cl.about__subtitle}>We Are The Best Sport Corporation Since 2020</h3>
						<p className={cl.about__text}>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
							<br />
							<br />
							It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
						</p>
					</div>
					<div className={cl.about__item}>
						<div className={cl.about__logo}>
							<div className={cl.about__item__logo}>
								<Logo />
							</div>
							<div className={cl.about__logo__text}>P&S CORPORATION</div>
						</div>
					</div>
				</div>
				<div className={cl.about__slider__imitation}></div>
				<div className={cl.about__items}>
					<div className={cl.about__item}>
						<div className={cl.about__logo}>
							<div className={cl.about__item__logo}>
								<Image src={'/art-object.svg'} alt='' fill />
							</div>
							<div className={cl.about__logo__text}>2023 © P&S Corporation All Right Reserved</div>
						</div>
					</div>
					<div className={cl.about__item}>
						<h1 className={cl.about__title}>OUR MEMBERS</h1>
						<h3 className={cl.about__subtitle}>Meet Some Of Our Talented Members</h3>
						<div className={cl.about__cards}>
							<div className={cl.about__card}>
								<div className={cl.about__card__img}>
									<Image src="/card-2.jpg" alt="" fill sizes="(max-width: 768px) 100px,
              (max-width: 1200px) 120px,
              150px" />
								</div>
								<div className={cl.about__card__title}>Michelle May</div>
								<div className={cl.about__card__text}>Nutrition Plans</div>
							</div>
							<div className={cl.about__card}>
								<div className={cl.about__card__img}>
									<Image src="/card-3.jpg" alt="" fill sizes="(max-width: 768px) 100px,
              (max-width: 1200px) 120px,
              150px" />
								</div>
								<div className={cl.about__card__title}>Michelle May</div>
								<div className={cl.about__card__text}>Nutrition Plans</div>
							</div>
							<div className={cl.about__card}>
								<div className={cl.about__card__img}>
									<Image src="/card-2.jpg" alt="" fill sizes="(max-width: 768px) 100px,
              (max-width: 1200px) 120px,
              150px" />
								</div>
								<div className={cl.about__card__title}>Michelle May</div>
								<div className={cl.about__card__text}>Nutrition Plans</div>
							</div>
							<div className={cl.about__card}>
								<div className={cl.about__card__img}>
									<Image src="/card-3.jpg" alt="" fill sizes="(max-width: 768px) 100px,
              (max-width: 1200px) 120px,
              150px" />
								</div>
								<div className={cl.about__card__title}>Michelle May</div>
								<div className={cl.about__card__text}>Nutrition Plans</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
		<div className={cl.about__slider}>
			<div className={cl.about__slides}>
				<div className={cl.about__slide}>
					<Image src={'/about-slide-1.jpg'} alt='' fill sizes='100px 10px' />
				</div>
				<div className={cl.about__slide}>
					<Image src={'/about-slide-2.png'} alt='' fill sizes='100px 10px' />
				</div>
				<div className={cl.about__slide}>
					<Image src={'/about-slide-3.png'} alt='' fill sizes='100px 10px' />
				</div>
				<div className={cl.about__slide}>
					<Image src={'/about-slide-4.png'} alt='' fill sizes='100px 10px' />
				</div>
				<div className={cl.about__slide}>
					<Image src={'/about-slide-5.png'} alt='' fill sizes='100px 10px' />
				</div>
			</div>
			<div className={cl.about__slides}>
				<div className={cl.about__slide}>
					<Image src={'/about-slide-6.jpg'} alt='' fill sizes='100px 10px' />
				</div>
				<div className={cl.about__slide}>
					<Image src={'/about-slide-7.jpg'} alt='' fill sizes='100px 10px' />
				</div>
				<div className={cl.about__slide}>
					<Image src={'/about-slide-8.jpg'} alt='' fill sizes='100px 10px' />
				</div>
				<div className={cl.about__slide}>
					<Image src={'/about-slide-9.jpg'} alt='' fill sizes='100px 10px' />
				</div>
				<div className={cl.about__slide}>
					<Image src={'/about-slide-10.jpg'} alt='' fill sizes='100px 10px' />
				</div>
			</div>
			<div className={cl.about__slides}>
				<div className={cl.about__slide}>
					<Image src={'/about-slide-1.jpg'} alt='' fill sizes='100px 10px' />
				</div>
				<div className={cl.about__slide}>
					<Image src={'/about-slide-2.png'} alt='' fill sizes='100px 10px' />
				</div>
				<div className={cl.about__slide}>
					<Image src={'/about-slide-3.png'} alt='' fill sizes='100px 10px' />
				</div>
				<div className={cl.about__slide}>
					<Image src={'/about-slide-4.png'} alt='' fill sizes='100px 10px' />
				</div>
				<div className={cl.about__slide}>
					<Image src={'/about-slide-5.png'} alt='' fill sizes='100px 10px' />
				</div>
			</div>
		</div>
	</div>
}

export default AboutUs