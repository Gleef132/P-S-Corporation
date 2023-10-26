import MealChoice from '@/components/screens/meal-choice/MealChoice'
import Meta from '../utils/Meta'
import { NextPage } from 'next'

const mealPage: NextPage = () => {
	return <><Meta pageName='nutrition' /> <MealChoice /></>
}

export default mealPage

