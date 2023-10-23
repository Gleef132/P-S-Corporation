import React, { FC, useState } from 'react'
import cl from './Form.module.scss'
import { useAppDispatch } from '@/hooks/redux'
import SignIn from './sign-in/SignIn'
import SignUp from './sing-up/SignUp'
import { popupSlice } from '@/store/reducers/popup/PopupSlice'

const Form: FC = () => {

	const dispatch = useAppDispatch()
	const { popupSwitch } = popupSlice.actions
	const [validateText, setValidateText] = useState<string>('')
	const [formType, setFormType] = useState<string>('signIn')
	const [title, setTitle] = useState<string>('Login')

	const formContent: { [key: string]: React.ReactNode } = {
		signIn: <SignIn changeFormTitle={setTitle} changeFormType={setFormType} changeValidateText={setValidateText} />,
		signUp: <SignUp changeFormTitle={setTitle} changeFormType={setFormType} changeValidateText={setValidateText} />
	}

	return (
		<form onClick={(e) => e.stopPropagation()} className={cl.form}>
			<div className={cl.form__close} onClick={() => dispatch(popupSwitch({ isPopupActive: false, popupChildren: '' }))} >
			</div>
			<h1 className={cl.form__title}>{title}</h1>
			<div className={cl.form__content}>
				<div className={cl.form__error}>{validateText}</div>
				{formContent[formType]}
			</div>
		</form>
	)
}

export default Form