import { IMeal } from '@/models/IMeal';
import { FC, useState } from 'react';
import cl from './MealWeek.module.scss';

interface Props {
	modalActiveHandle: {
		show: (state: boolean) => void;
		setMeal: (meal: IMeal) => void;
	};
}

const MealWeek: FC<Props> = ({ modalActiveHandle }) => {
	const [popup, setPopup] = useState<boolean>(false);
	const [{ title, img, meals }, setMeal] = useState<IMeal>({
		id: '',
		type: '',
		title: '',
		img: '', meals: [],
	});

	modalActiveHandle.show = setPopup;
	modalActiveHandle.setMeal = setMeal;

	const week = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	];
	const [dayActiveIndex, setDayActiveIndex] = useState<number>(0);

	return (
		<>
			<div className={popup ? `${cl.popup} ${cl.active}` : cl.popup}>
				<div className={cl.popup__bg}>
					<img src={img} alt='' />
				</div>
				<div className={cl.popup__container}>
					<h1 className={cl.popup__title}>
						<span>{title}</span>
						<div
							className={cl.popup__close}
							onClick={() => setPopup(false)}
						></div>
					</h1>
					<ul className={cl.popup__menu__list}>
						{week.map((item, index) => {
							return (
								<li key={item} className={dayActiveIndex === index ? `${cl.popup__menu__link} ${cl.active}` : cl.popup__menu__link
								}
									onClick={() => setDayActiveIndex(index)}>
									{item}
								</li>
							);
						})}
					</ul>
					<div className={cl.popup__content}>
						<div className={cl.popup__items}>
							<div className={cl.popup__item}>
								<h2 className={cl.popup__item__title}>Breakfast</h2>
								<ul className={cl.popup__list}>
									{meals[dayActiveIndex]?.breakfast.map((item) => {
										return (
											<li className={cl.popup__link} key={item}>
												{item}
											</li>
										);
									})}
								</ul>
							</div>
							<div className={cl.popup__item}>
								<h2 className={cl.popup__item__title}>Snack</h2>
								<ul className={cl.popup__list}>
									{meals[dayActiveIndex]?.firstSnack.map((item) => {
										return (
											<li className={cl.popup__link} key={item}>
												{item}
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						<div className={cl.popup__items}>
							<div className={cl.popup__item}>
								<h2 className={cl.popup__item__title}>Lunch</h2>
								<ul className={cl.popup__list}>
									{meals[dayActiveIndex]?.lunch.map((item) => {
										return (
											<li className={cl.popup__link} key={item}>
												{item}
											</li>
										);
									})}
								</ul>
							</div>
							<div className={cl.popup__items}>
								<div className={cl.popup__item}>
									<h2 className={cl.popup__item__title}>Snack</h2>
									<ul className={cl.popup__list}>
										{meals[dayActiveIndex]?.secondarySnack.map((item) => {
											return (
												<li className={cl.popup__link} key={item}>
													{item}
												</li>
											);
										})}
									</ul>
								</div>
							</div>
						</div>
						<div className={cl.popup__item}>
							<h2 className={cl.popup__item__title}>Dinner</h2>
							<ul className={cl.popup__list}>
								{meals[dayActiveIndex]?.dinner.map((item) => {
									return (
										<li className={cl.popup__link} key={item}>
											{item}
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MealWeek;
