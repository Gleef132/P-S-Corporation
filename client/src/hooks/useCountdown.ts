import { useEffect, useState } from "react";


const useCountdown = () => {

	const [seconds, setSeconds] = useState<any>('')
	const [isStart, setIsStart] = useState<boolean>(false)
	useEffect(() => {
		if (isStart) {
			let interval = setInterval(() => {
				if (seconds) {
					setSeconds(seconds - 1)
				} else
					clearInterval(interval)
			}, 1000)
			if (seconds === 0) {
				setSeconds('')
				setIsStart(false)
			}
			return () => {
				clearInterval(interval);
			}
		} else {
			setSeconds(60)
		}
	})

	return [seconds, setSeconds, isStart, setIsStart]
}

export default useCountdown