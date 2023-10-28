import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { alertSlice } from '@/store/reducers/alert/AlertSlice'
import { authSlice } from '@/store/reducers/auth/AuthSlice'
import { popupSlice } from '@/store/reducers/popup/PopupSlice'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useRef, useState } from 'react'
import cl from './HeaderMenu.module.scss'
import Form from '@/components/form/auth/Form'

interface HeaderMenuProps {
	userAvatar: string;
}

const HeaderMenu: FC<HeaderMenuProps> = ({ userAvatar }) => {
	const [marker, setMarker] = useState<any>({ mark: '', left: '0', width: '0' })

	const dispatch = useAppDispatch()
	const { popupSwitch, toggleActiveMobileMenu } = popupSlice.actions
	const { toggleAlertActive } = alertSlice.actions
	const { userExit } = authSlice.actions
	const { isAuth } = useAppSelector(state => state.authReducer)
	const { isMobileMenuActive } = useAppSelector(state => state.popupReducer)

	const { pathname } = useRouter()
	const profileRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const mark = document.querySelector('#marker')
		const btn = document.querySelector('#navBtn')

		const markWindowResize = () => {
			let leftElement = (btn as HTMLButtonElement)?.offsetLeft + 15;
			let widthElement = (btn as HTMLButtonElement)?.offsetWidth - 30;

			(mark as HTMLAnchorElement).style.left = leftElement + 'px';
			(mark as HTMLAnchorElement).style.width = widthElement + 'px';
			setMarker({ ...marker, mark: mark, left: leftElement, width: widthElement })
		}
		window.addEventListener('resize', () => {
			markWindowResize()
		})
		window.addEventListener('scroll', () => {
			if (window.scrollY > 1) {
				document.querySelector('header')?.classList.add('header__active')
			} else {
				document.querySelector('header')?.classList.remove('header__active')
			}
		})
		if (pathname === '/profile' || pathname === '/my-trainings' || pathname === '/search') {
			setMarker({ ...marker, mark: mark, left: '0px', width: '0px' })
			if (marker.mark.style) {
				marker.mark.style.left = 0;
				marker.mark.style.width = 0;
			}
		}
		markWindowResize()
	}, [pathname])

	const markIndicator = (e: React.MouseEvent<HTMLAnchorElement>, type: string) => {
		let leftElement = e.currentTarget.offsetLeft + 15;
		let widthElement = e.currentTarget.offsetWidth - 30;
		const markerStyle = marker.mark.style
		if (markerStyle) {
			switch (type) {
				case 'click':
					if (e.currentTarget.innerHTML === 'Sign In') {
						dispatch(popupSwitch({ isPopupActive: true, popupChildren: <Form /> }))
						// markerStyle.left = marker.left + 'px';
						// markerStyle.width = marker.width + 'px';
						markerStyle.left = '0px';
						markerStyle.width = '0px';
					} else {
						setMarker({ ...marker, left: leftElement, width: widthElement });
						markerStyle.left = leftElement + 'px';
						markerStyle.width = widthElement + 'px';
					}
					dispatch(toggleActiveMobileMenu(false))
					break;
				case 'leave':
					if (pathname === '/profile' || pathname === '/my-trainings' || pathname === '/search') {
						markerStyle.left = '0px';
						markerStyle.width = '0px';
					}
					markerStyle.left = marker.left + 'px';
					markerStyle.width = marker.width + 'px';
					break;
				case 'enter':
					markerStyle.left = leftElement + 'px';
					markerStyle.width = widthElement + 'px';
					break;
				default:
					break;
			}
		}
	}

	const userExitHandle = () => {
		dispatch(toggleAlertActive({ message: 'You are logged out of your account', isActive: true, textColor: "#fa1505" }))
		dispatch(userExit(''))
		dispatch(toggleActiveMobileMenu(false))

	}

	const getMenuLink = (path: string, text: string, id?: string) => {

		if (path === '/sign-in') {
			if (isAuth) {
				return <div className={cl.menu__profile} ref={profileRef} onClick={() => profileRef?.current?.classList.toggle(cl.active)}  >
					<div className={cl.menu__profile__img}>
						<img src={userAvatar} onLoad={(e) => {
							e.currentTarget.style.zIndex = '1';
							(e.currentTarget.parentElement as HTMLElement).style.background = 'none'
						}}
						/>
					</div>
					<ul className={cl.menu__profile__list}>
						<Link href={'/profile'} onClick={() => dispatch(toggleActiveMobileMenu(false))} className={pathname === '/profile' ? `${cl.menu__profile__link} ${cl.active}` : cl.menu__profile__link}>Profile</Link>
						<Link href={'/my-trainings'} onClick={() => dispatch(toggleActiveMobileMenu(false))} className={pathname === '/my-trainings' ? `${cl.menu__profile__link} ${cl.active}` : cl.menu__profile__link}>My trainings</Link>
						{pathname === '/profile' || pathname === '/my-trainings' ?
							<Link href={'/'} className={cl.menu__profile__link} onClick={userExitHandle}>Log Out</Link>
							:
							<div className={cl.menu__profile__link} onClick={userExitHandle}>
								Log Out
							</div>
						}
					</ul>
				</div>
			} else {
				return <a className={pathname === '/sign-in' ? `${cl.menu__link} ${cl.active}` : cl.menu__link} onMouseEnter={(e) => markIndicator(e, 'enter')} onClick={(e) => markIndicator(e, 'click')} onMouseLeave={(e) => markIndicator(e, 'leave')}>{text}</a>
			}
		}
		if (path === '/nutrition' || path === '/nutrition/[id]') {
			return <Link href={'/nutrition'} id={id} className={pathname === path ? `${cl.menu__link} ${cl.active}` : cl.menu__link} onMouseEnter={(e) => markIndicator(e, 'enter')} onClick={(e) => markIndicator(e, 'click')} onMouseLeave={(e) => markIndicator(e, 'leave')}>{text}</Link>
		}
		return <Link href={text === 'Trainings' ? '/trainings' : path} id={id} className={pathname === path ? `${cl.menu__link} ${cl.active}` : cl.menu__link} onMouseEnter={(e) => markIndicator(e, 'enter')} onClick={(e) => markIndicator(e, 'click')} onMouseLeave={(e) => markIndicator(e, 'leave')}>{text}</Link>
	}

	return <>
		<nav className={isMobileMenuActive ? `${cl.menu} ${cl.active}` : cl.menu}>
			<ul className={cl.menu__list}>
				<div className={cl.menu__marker} id="marker"></div>
				{getMenuLink('/', 'Home', pathname === '/' ? 'navBtn' : '')}
				{getMenuLink('/about-us', 'About Us', pathname === '/about-us' ? 'navBtn' : '')}
				{getMenuLink(pathname === '/nutrition/[id]' ? '/nutrition/[id]' : '/nutrition', 'Nutrition', pathname === '/nutrition' || pathname === '/nutrition/[id]' ? 'navBtn' : '')}
				{getMenuLink(pathname === '/training/[id]' ? '/training/[id]' : '/trainings', 'Trainings', pathname === '/trainings' || pathname === '/training/[id]' ? 'navBtn' : '')}
				{getMenuLink('/sign-in', 'Sign In')}
			</ul>
		</nav>
		<button type="button" onClick={() => dispatch(toggleActiveMobileMenu(!isMobileMenuActive))} className={isMobileMenuActive ? `${cl.burger} ${cl.active}` : cl.burger}>
			<span></span>
			<span></span>
			<span></span>
		</button>
	</>
}

export default HeaderMenu