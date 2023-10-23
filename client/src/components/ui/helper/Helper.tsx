import React, { ReactNode, useRef, Ref, useImperativeHandle, forwardRef, useState } from 'react'
import cl from './Helper.module.scss'

export interface RefType {
	showHelper: (e: React.MouseEvent<HTMLDivElement>) => void;
	hiddenHelper: () => void;
	setValue: (value: ReactNode) => void;
}

const Helper = ({ }, ref: Ref<RefType>) => {

	const refHelper = useRef<HTMLDivElement>(null)
	const [value, setValue] = useState<ReactNode>()

	const showHelper = (e: React.MouseEvent<HTMLDivElement>) => {
		let { top } = e.currentTarget.getBoundingClientRect()
		let { left } = e.currentTarget.getBoundingClientRect()

		if (refHelper.current) {
			let condition = (refHelper.current.offsetWidth / 2 + 10) > left
			left = condition ? 10 : left
			refHelper.current.style.opacity = '1'
			refHelper.current.style.transitionDuration = '.3s'
			refHelper.current.style.transitionProperty = 'opacity'
			refHelper.current.style.top = Math.floor(top) - 5 + 'px'
			refHelper.current.style.left = Math.floor(left) + 'px'
			refHelper.current.style.transform = condition ? 'scale(1) translateY(-100%)' : 'scale(1) translateX(calc(-50% + 12px)) translateY(-100%)'
			refHelper.current.style.transitionDelay = '0s'
		}
		// }

	}

	const hiddenHelper = () => {
		if (refHelper.current) {
			refHelper.current.style.opacity = '0'
			refHelper.current.style.transform = 'scale(0)'
			refHelper.current.style.transitionDuration = '0s'
			refHelper.current.style.transitionProperty = 'all'
			refHelper.current.style.transitionDelay = '.2s'
		}
	}

	useImperativeHandle(ref, () => ({ showHelper, hiddenHelper, setValue }))

	const mouseEnterHelper = (e: React.MouseEvent<HTMLDivElement>) => {
		const elMatrix = window.getComputedStyle(e.currentTarget).transform
		const matrix = 'matrix(1, 0, 0, 1,' + elMatrix.slice(18)
		e.currentTarget.style.opacity = '1'
		e.currentTarget.style.transitionDuration = '.3s'
		e.currentTarget.style.transitionProperty = 'opacity'
		e.currentTarget.style.transitionDelay = '0s'
		e.currentTarget.style.transform = matrix
	}

	const mouseLeaveHelper = (e: React.MouseEvent<HTMLDivElement>) => {
		e.currentTarget.style.opacity = '0'
		e.currentTarget.style.transitionDuration = '0s'
		e.currentTarget.style.transitionDelay = '0s'
		e.currentTarget.style.transitionProperty = 'all'
		e.currentTarget.style.transform = 'scale(0)'
	}

	return <div ref={refHelper} className={cl.helper}
		onMouseEnter={mouseEnterHelper}
		onMouseLeave={mouseLeaveHelper}>
		{value}
	</div>
}

export default forwardRef(Helper)