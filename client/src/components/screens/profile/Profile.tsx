import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { authApi } from '@/services/UserService'
import { authSlice } from '@/store/reducers/auth/AuthSlice'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'
import cl from './Profile.module.scss'

const Profile: FC = () => {

	const [file, setFile] = useState<File>()
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const [firstName, setFirstName] = useState('')

	const { isAuth, isRefetch } = useAppSelector(state => state.authReducer)
	const { data: user, refetch } = authApi.useGetUserQuery('')
	const { userChangeProfileData } = authSlice.actions
	const [userChangeData] = authApi.useUserChangeDataMutation()
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (isAuth !== '') {
			refetch()
		}
	}, [isAuth])

	const saveHandle = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		const data = new FormData()
		data.append('avatar', file as Blob)
		data.append('login', login)
		data.append('password', password)
		data.append('email', email)
		data.append('firstName', firstName)
		await userChangeData(data)
		dispatch(userChangeProfileData(isRefetch))
	}

	const fileChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFile(e.target.files[0])
			const profileAvatar = document.querySelector('#profileAvatar') as HTMLImageElement
			const fileReader = new FileReader()
			fileReader.readAsDataURL(e.target.files[0])
			fileReader.onload = () => {
				profileAvatar.src = fileReader.result as string
			}
		}
	}

	return <section className={cl.profile}>
		<Image className={cl.profile__bg} src={'/meal-bg.jpg'} fill alt='' priority />
		<div className={`${cl.profile__container} _container`}>
			<form method="post" className={cl.profile__form}>
				<div className={cl.profile__item}>
					<label htmlFor="profileFile">
						<img className={cl.profile__img} id='profileAvatar' src={user?.path} alt="" />
					</label>
					<input id='profileFile' type="file" className={cl.profile__file}
						onChange={fileChangeHandle}
						accept={'image/*,.jpg,.png,.gif,.web'}
					/>
				</div>
				<div className={cl.profile__item}>
					<h2 className={cl.profile__title}>Сlick on the picture to choose an avatar</h2>
				</div>
				<div className={cl.profile__item}>
					<h2 className={cl.profile__title}>Login</h2>
					<input type="text" className={cl.profile__input} placeholder={user?.login} value={login} onChange={(e) => setLogin(e.target.value)} />
				</div>
				<div className={cl.profile__item}>
					<h2 className={cl.profile__title}>Password (hashed)</h2>
					<input type="password" className={cl.profile__input} placeholder={user?.password} value={password} onChange={(e) => setPassword(e.target.value)} />
				</div>
				<div className={cl.profile__item}>
					<h2 className={cl.profile__title}>Email</h2>
					<input type="email" className={cl.profile__input} placeholder={user?.email} value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div className={cl.profile__item}>
					<h2 className={cl.profile__title}>User Name</h2>
					<input type="text" className={cl.profile__input} placeholder={user?.userName} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
				</div>
				<button className={cl.profile__btn} onClick={saveHandle}>Save</button>
			</form>
		</div>
	</section>
}

export default Profile