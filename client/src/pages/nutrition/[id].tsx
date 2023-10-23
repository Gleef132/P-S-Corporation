import { GetServerSideProps, NextPage } from 'next'
import { IMeal } from '@/models/IMeal'
import Meal from '@/components/screens/meal/Meal'
import Meta from '@/utils/Meta'

interface Props {
	meals: IMeal[]
}

const TraningPage: NextPage<Props> = (props) => {
	return <><Meta pageName='nutrition' /><Meal meals={props.meals} /></>
}

export default TraningPage

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
	const response = await fetch(`${process.env.SERVER_API}api/nutrition/${params?.id}`)
	const data = await response.json()

	return {
		props: {
			meals: data,
		}
	}
}