import Home from "@/components/screens/home/Home";
import { IPopularTranings } from "@/models/ITrainings";
import Meta from "@/utils/Meta";
import { GetStaticProps, NextPage } from 'next'

interface Props {
	data: IPopularTranings;
}

const indexPage: NextPage<Props> = ({ data }) => {
	return <><Meta pageName='home' /><Home {...data} /></>
}
export default indexPage

export const getStaticProps: GetStaticProps<Props> = async () => {
	// const { data } = traningApi.useFetchPopularTraningsQuery('')
	const response = await fetch('http://localhost:5000/api/trainings-popular')
	const data = await response.json()
	return {
		props: {
			data: data
		}, // will be passed to the page component as props
	}
}
