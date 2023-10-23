import { useEffect, useRef } from "react";

const useObserver = (
	ref: any,
	canLoad: boolean,
	isLoading: boolean,
	callback: () => void,
	dependencies: any[]) => {

	const observer = useRef<any>();

	useEffect(() => {
		if (isLoading) return;
		if (observer.current) observer.current.disconnect();
		const cb = function (entries: any, observer: any) {
			if (entries[0].isIntersecting && canLoad) {
				callback()
			}
		}
		observer.current = new IntersectionObserver(cb)
		observer.current.observe(ref.current)

		return () => {
			observer.current.disconnect();
		}
	}, dependencies)
}

export default useObserver;
