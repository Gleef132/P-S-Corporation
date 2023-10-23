import Home from "@/components/screens/home/Home";
import { IPopularTrainings } from "@/models/ITrainings";
import Meta from "@/utils/Meta";
import { GetStaticProps, NextPage } from 'next'

interface Props {
	data: IPopularTrainings;
}

const indexPage: NextPage<Props> = ({ data }) => {
	return <><Meta pageName='home' /><Home {...data} /></>
}
export default indexPage

export const getStaticProps: GetStaticProps<Props> = async () => {
	// const { data } = traningApi.useFetchPopularTraningsQuery('')
	try {
		const response = await fetch(`${process.env.SERVER_API}api/trainings-popular`)
		const data = await response.json()
		return {
			props: {
				data: data
			}, // will be passed to the page component as props
		}
	} catch (e) {
		return {
			props: {
				data: []
			}
		}
	}
}
