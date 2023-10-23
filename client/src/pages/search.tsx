import Search from '@/components/screens/search/Search'
import Meta from '@/utils/Meta'
import { NextPage } from 'next'

const searchPage: NextPage = () => {
	return <><Meta pageName='search' /> <Search /></>
}

export default searchPage
