import TrainingList from '@/components/trainingCards/TrainingList/TrainingList'
import NavLink from '@/components/ui/nav-link/NavLink'
import { FC, useState } from 'react'
import cl from './Trainings.module.scss'
import { useAppSelector } from '@/hooks/redux'
import NotFound from '@/components/ui/not-found/NotFound'


const Trainings: FC = () => {

	const [sortBy, setSortBy] = useState<string>('All')
	const [sortOption, setSortOption] = useState<string>('')
	const { isSearchNotFound: isNotFound } = useAppSelector(state => state.notFoundSlice)

	const clickHandle = (sortBy: string, sortOption: string) => {
		setSortBy(sortBy)
		setSortOption(sortOption)
	}

	return (
		<section className={cl.trainings}>
			<div className={'_container'}>
				<div className={cl.trainings__content}>
					<nav className={cl.trainings__nav}>
						<ul className={cl.trainings__nav__list}>
							<NavLink isActive={sortBy === 'All'} childer={'All'} onClick={() => clickHandle('All', '')} />
							<NavLink isActive={sortBy === 'Popularity'} childer={'Popularity'} onClick={() => clickHandle('Popularity', '')} />
							<NavLink isActive={sortBy === 'P&S Corporation'} childer={'From P&S Corporation'} onClick={() => clickHandle('P&S Corporation', 'from')} />
							<NavLink isActive={sortBy === 'Male'} childer={'Male'} onClick={() => clickHandle('Male', 'gender')}
							/>
							<NavLink isActive={sortBy === 'Female'} childer={'Female'} onClick={() => clickHandle('Female', 'gender')} />
							<NavLink isActive={sortBy === 'Easy'} childer={'Easy'} onClick={() => clickHandle('Easy', 'level')} />
							<NavLink isActive={sortBy === 'Normal'} childer={'Normal'} onClick={() => clickHandle('Normal', 'level')} />
							<NavLink isActive={sortBy === 'Hard'} childer={'Hard'} onClick={() => clickHandle('Hard', 'level')} />
						</ul>
					</nav>
					{isNotFound && <NotFound text='No results found' />}
					<TrainingList sortBy={sortBy} sortOption={sortOption} />
				</div>
			</div>
		</section>
	)
}

export default Trainings