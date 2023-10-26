import About from '@/components/screens/about/About'
import Meta from '../utils/Meta'
import { NextPage } from 'next'

const aboutPage: NextPage = () => {
	return <><Meta pageName='about' /><About /></>
}

export default aboutPage