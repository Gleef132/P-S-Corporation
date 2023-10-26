import Trainings from '@/components/screens/tranings/Trainings';
import Meta from '../utils/Meta';
import { NextPage } from 'next'

const trainingsPage: NextPage = () => {
	return <><Meta pageName='trainings' /><Trainings /></>
}

export default trainingsPage