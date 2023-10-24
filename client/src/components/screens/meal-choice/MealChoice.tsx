import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import cl from './MealChoice.module.scss';

const MealChoice: FC = () => {
	return (
		<div className={cl.meal__choice}>
			<Image className={cl.meal__bg} src={'/meal-bg.jpg'} priority alt='' fill />
			<div className={cl.meal__gender} onClick={(e) => e.stopPropagation()}>
				<h1 className={cl.meal__gender__title}>Nutrition</h1>
				<div className={cl.meal__gender__content}>
					<Link href={'/nutrition/male'} className={cl.meal__gender__item}>
						<Image
							priority
							className={cl.meal__gender__item__img}
							src={'/meal-man.png'}
							alt=''
							fill
							sizes='100px 10px'
						/>
						<div className={cl.meal__gender__item__title}>FOR MAN</div>
					</Link>
					<Link href={'/nutrition/female'} className={cl.meal__gender__item}>
						<Image
							priority
							className={cl.meal__gender__item__img}
							src={'/meal-woman.png'}
							alt=''
							fill
							sizes='100px 10px'
						/>
						<div className={cl.meal__gender__item__title}>FOR WOMAN</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default MealChoice;
