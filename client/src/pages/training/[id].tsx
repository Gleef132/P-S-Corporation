import Training from '@/components/screens/training/Training'
import { ITraining } from '@/models/ITraining'
import Meta from '@/utils/Meta'
import { GetServerSideProps, NextPage } from 'next'

interface Props {
	training: ITraining
}

const TrainingPage: NextPage<Props> = ({ training }) => {
	return <><Meta pageName='training' /><Training {...training} /></>
}

export default TrainingPage

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/trainings/${params?.id}`)
		const data = await response.json()

		return {
			props: {
				training: data
			}
		}
	} catch (e) {
		return {
			props: {
				training: {}
			}
		}
	}
}