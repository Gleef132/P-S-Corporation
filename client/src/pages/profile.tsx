import Profile from '@/components/screens/profile/Profile'
import Meta from '../utils/Meta'
import { NextPage } from 'next'

// import dynamic from 'next/dynamic'
// const DymanicProfile = dynamic(() => import('@/components/screens/profile/Profile'), {
// 	ssr: false
// })

const profilePage: NextPage = () => {
	return <><Meta pageName='profile' /> <Profile /></>
}

export default profilePage

