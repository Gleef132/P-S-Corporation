import { IComment } from '@/models/ITraining'
import { FC, useEffect, useRef, useState } from 'react'
import cl from './Comment.module.scss'

const Comment: FC<IComment> = (comment) => {

	const [textShow, setTextShow] = useState<boolean>(false)
	const [btnShow, setBtnShow] = useState<boolean>(false)

	function isOverflowed(el: any): boolean {
		if (el) {
			console.log(el.offsetWidth / 14)
			// return el.scrollHeight > 58
			return el.scrollWidth > el.offsetWidth || el.scrollHeight > el.offsetHeight;
		}
		return false
	}

	const ref = useRef<HTMLParagraphElement | null>(null)

	useEffect(() => {
		setBtnShow(isOverflowed(ref.current))
		window.addEventListener('resize', () => {
			setBtnShow(isOverflowed(ref.current))
		})
	}, [ref, btnShow])

	return <div className={cl.comment}>
		<div className={cl.comment__img}>
			<img src={comment.path} alt="" onLoad={(e) => {
				e.currentTarget.style.zIndex = '1';
				(e.currentTarget.parentElement as HTMLElement).style.background = 'none'
			}} />
		</div>
		<div className={cl.comment__content}>
			<div className={cl.comment__head}>
				<div className={cl.comment__name}>@{comment.userName}</div>
				<div className={cl.comment__date}>{comment.date}</div>
			</div>
			<p ref={ref} className={textShow ? `${cl.comment__text} ${cl.active}` : cl.comment__text}>{comment.comment}
			</p>
			<button className={btnShow ? `${cl.comment__btn} ${cl.active}` : cl.comment__btn} onClick={() => {
				setTextShow(!textShow)
				if (ref.current) {
					ref.current.style.wordBreak = !textShow ? 'break-all' : 'keep-all'
				}
			}}>Read more</button>
		</div>
	</div>
}

export default Comment