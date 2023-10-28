import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import Link from "next/link"
import React, { FC, useEffect, useState } from "react"
import Logo from 'public/logo.svg'
import cl from "./Header.module.scss"
import { authSlice } from "@/store/reducers/auth/AuthSlice"
import { authApi } from "@/services/UserService"
import SearchComponent from "@/components/search/SearchComponent"
import HeaderMenu from "./HeaderMenu/HeaderMenu"

const Header: FC = () => {

	const [skip, setSkip] = useState<boolean>(true)
	const dispatch = useAppDispatch()
	const { userDataSave } = authSlice.actions
	const { isAuth, isRefetch } = useAppSelector(state => state.authReducer)
	const [userAvatar, setUserAvatar] = useState<string>('')
	const { data: user } = authApi.useGetUserQuery('', { skip: skip })


	useEffect(() => {
		let key = localStorage.getItem('token')
		if (key && isAuth !== '') {
			setSkip(false)
			dispatch(userDataSave([user?.path, user?.userName] as string[]))
			setUserAvatar(user?.path as string)
		}

	}, [isAuth, isRefetch, user])

	return (
		<>
			<header className={cl.header}>
				<div className={`${cl.header__container} _container`}>
					<div className={cl.header__body}>
						<Link href={'/'} className={cl.header__logo}><Logo /></Link>
						<SearchComponent />
						<HeaderMenu userAvatar={userAvatar} />
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
