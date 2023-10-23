import { FC } from 'react'
import cl from './Search.module.scss'
import { useAppSelector } from '@/hooks/redux'
import SearchList from '@/components/trainingCards/SearchList/SearchList'
import NotFound from '@/components/ui/not-found/NotFound'

const Search: FC = () => {
	const { isSearchNotFound: isNotFound } = useAppSelector(state => state.notFoundSlice)

	return <section className={cl.search}>
		<div className={'_container'}>
			{isNotFound ?
				<NotFound text='No results found' />
				: <SearchList />
			}
		</div>
	</section>
}

export default Search