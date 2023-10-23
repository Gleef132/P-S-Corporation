import { FC, useState } from 'react'
import cl from './SignIn.module.scss'
import { popupSlice } from '@/store/reducers/popup/PopupSlice'
import { alertSlice } from '@/store/reducers/alert/AlertSlice'
import { authSlice } from '@/store/reducers/auth/AuthSlice'
import { useAppDispatch } from '@/hooks/redux'
import { authApi } from '@/services/UserService'
import Button from '@/components/ui/button/Button'
import EyeVisible from 'public/eye.svg'
import EyeHidden from 'public/eye-off.svg'

interface ISignInProps {
  changeFormTitle: (value: string) => void;
  changeFormType: (value: string) => void;
  changeValidateText: (value: string) => void;
}

const SignIn: FC<ISignInProps> = ({ changeValidateText, changeFormTitle, changeFormType }) => {

  const dispatch = useAppDispatch()
  const { toggleActiveMobileMenu, popupSwitch } = popupSlice.actions
  const { toggleAlertActive } = alertSlice.actions
  const { userEnter, userLoginStore } = authSlice.actions
  const [userLogin] = authApi.useUserLoginMutation()

  const [signInLogin, setSignInLogin] = useState<string>('')
  const [signInPassword, setSignInPassword] = useState<string>('')
  const [isUserEnterError, setIsUserEnterError] = useState<boolean>(false)
  const [signInPasswordVisible, setSignInPasswordVisible] = useState<boolean>(false)

  const refreshData = () => {
    setSignInLogin('')
    setSignInPassword('')
  }

  const loginHandle = async () => {
    if (signInLogin && signInPassword && !isUserEnterError) {
      const user = { login: signInLogin, password: signInPassword }
      await userLogin(user)
        .unwrap()
        .then(res => {
          dispatch(popupSwitch({ isPopupActive: false, popupChildren: '' }))
          dispatch(toggleActiveMobileMenu(false))
          dispatch(toggleAlertActive({ message: 'You have successfully logged in', isActive: true, textColor: '#35c41f' }))
          dispatch(userEnter(res.token))
          dispatch(userLoginStore(user))
          refreshData()
        })
        .catch((e) => {
          setIsUserEnterError(true)
          changeValidateText(e.data.message)
        })
    } else {
      changeValidateText(isUserEnterError ? 'Please enter the correct information' : 'Please fill in all fields')
    }
  }

  const changeFormTypeHandle = () => {
    changeFormType('signUp')
    changeFormTitle('Registration')
    changeValidateText('')
  }

  return (
    <>
      <div className={cl.form__inputs}>
        <input type={'text'} className={cl.form__input} placeholder={'Login'} value={signInLogin} onChange={(e) => {
          setIsUserEnterError(false)
          setSignInLogin(e.target.value.trim())
        }}
          autoFocus
        />
        <div className={cl.form__item}>
          <input type={signInPasswordVisible ? 'text' : 'password'} className={cl.form__input} placeholder={'Password'}
            value={signInPassword} onChange={(e) => {
              setIsUserEnterError(false)
              setSignInPassword(e.target.value.trim())
            }} />
          <div className={cl.form__icon} onClick={() => setSignInPasswordVisible(!signInPasswordVisible)}>
            {!signInPasswordVisible ? <EyeVisible /> : <EyeHidden />}
          </div>
        </div>
      </div>
      <div className={cl.form__btns}>
        <Button type="primary" clName={cl.form__btn} onClick={loginHandle} >Sign In</Button>
        <Button type="primary" clName={cl.form__btn} onClick={changeFormTypeHandle}>Registration</Button>
      </div>
    </>
  )
}

export default SignIn