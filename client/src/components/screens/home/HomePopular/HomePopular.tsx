import { IPopularTrainings } from '@/models/ITrainings'
import Link from 'next/link'
import { FC } from 'react'
import cl from './HomePopular.module.scss'

const HomePopular: FC<IPopularTrainings> = (trainings) => {

	return (
		<div className={cl.popular} id='popular'>
			<div className={'_container'}>
				<div className={cl.popular__title}>Popular</div>
				<div className={cl.popular__content}>
					<div className={cl.popular__item}>
						<div className={`${cl.popular__item__title} ${cl.popular__item__title__left}`}>Cardio</div>
						<div className={cl.popular__slider}>
							<div className={`${cl.popular__slides} ${cl.popular__slides__left}`} >
								{trainings?.cardio ? trainings?.cardio.map((item) => {
									return <Link href={`/training/${item._id}`} className={cl.popular__slide} key={item._id}>
										<img src={item.path as string} alt="image didn't load" />
									</Link>
								}) : <></>}
							</div>
							<div className={`${cl.popular__slides} ${cl.popular__slides__left}`} >
								{trainings?.cardio ? trainings?.cardio.map((item) => {
									return <Link href={`/training/${item._id}`} className={cl.popular__slide} key={item._id}>
										<img src={item.path as string} alt="image didn't load" />
									</Link>
								}) : <></>}
							</div>
						</div>
					</div>
					<div className={cl.popular__item}>
						<div className={`${cl.popular__item__title} ${cl.popular__item__title__rigth}`}>Endurance</div>
						<div className={cl.popular__slider}>
							<div className={`${cl.popular__slides} ${cl.popular__slides__right}`} >
								{trainings?.cardio ? trainings?.endurance.map((item) => {
									return <Link href={`/training/${item._id}`} className={cl.popular__slide} key={item._id}>
										<img src={item.path as string} alt="image didn't load" />
									</Link>
								}) : <></>}
							</div>
							<div className={`${cl.popular__slides} ${cl.popular__slides__right}`} >
								{trainings?.cardio ? trainings?.endurance.map((item) => {
									return <Link href={`/training/${item._id}`} className={cl.popular__slide} key={item._id}>
										<img src={item.path as string} alt="image didn't load" />
									</Link>
								}) : <></>}
							</div>
						</div>
					</div>
					<div className={cl.popular__item}>
						<div className={`${cl.popular__item__title} ${cl.popular__item__title__left}`}>Power</div>
						<div className={cl.popular__slider}>
							<div className={`${cl.popular__slides} ${cl.popular__slides__left}`} >
								{trainings?.cardio ? trainings?.power.map((item) => {
									return <Link href={`/training/${item._id}`} className={cl.popular__slide} key={item._id}>
										<img src={item.path as string} alt="image didn't load" />
									</Link>
								}) : <></>}
							</div>
							<div className={`${cl.popular__slides} ${cl.popular__slides__left}`} >
								{trainings?.cardio ? trainings?.power.map((item) => {
									return <Link href={`/training/${item._id}`} className={cl.popular__slide} key={item._id}>
										<img src={item.path as string} alt="image didn't load" />
									</Link>
								}) : <></>}
							</div>
						</div>
					</div>
					<div className={cl.popular__item}>
						<div className={`${cl.popular__item__title} ${cl.popular__item__title__rigth}`}>Yoga</div>
						<div className={cl.popular__slider}>
							<div className={`${cl.popular__slides} ${cl.popular__slides__right}`} >
								{trainings?.cardio ? trainings?.yoga.map((item) => {
									return <Link href={`/training/${item._id}`} className={cl.popular__slide} key={item._id}>
										<img src={item.path as string} alt="image didn't load" />
									</Link>
								}) : <></>}
							</div>
							<div className={`${cl.popular__slides} ${cl.popular__slides__right}`} >
								{trainings?.cardio ? trainings?.yoga.map((item) => {
									return <Link href={`/training/${item._id}`} className={cl.popular__slide} key={item._id}>
										<img src={item.path as string} alt="image didn't load" />
									</Link>
								}) : <></>}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div >
	)
}

export default HomePopular