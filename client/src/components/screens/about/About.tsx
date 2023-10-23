import Image from 'next/image'
import { FC } from 'react'
import AboutMain from './AboutMain/AboutMain'
import AboutSponsor from './AboutSponsor/AboutSponsor'
import AboutUs from './AboutUs/AboutUs'

const About: FC = () => {
	return <>
		<AboutMain />
		<AboutUs />
		<AboutSponsor />
	</>
}

export default About