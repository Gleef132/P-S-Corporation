import { IPopularTrainings } from "@/models/ITrainings"
import Image from "next/image"
import { FC } from "react"
import HomeContact from "./HomeContact/HomeContact"
import HomeMain from "./HomeMain/HomeMain"
import HomePopular from "./HomePopular/HomePopular"

const Home: FC<IPopularTrainings> = (tranings) => {
	return (
		<>
			<HomeMain />
			<HomePopular {...tranings} />
			<HomeContact />
		</>
	)
}

export default Home