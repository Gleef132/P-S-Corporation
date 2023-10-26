import MyTrainings from '@/components/screens/my-trainings/MyTrainings'
import Meta from '../utils/Meta'
import { NextPage } from 'next'

const myTrainingsPage: NextPage = () => {
	return <><Meta pageName='myTrainings' /> <MyTrainings /></>
}

export default myTrainingsPage

