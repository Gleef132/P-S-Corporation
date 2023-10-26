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
  changeLoading: (state: boolean) => void;
}

const SignIn: FC<ISignInProps> = ({ changeValidateText, changeFormTitle, changeFormType, changeLoading }) => {

  const dispatch = useAppDispatch()
  const { toggleActiveMobileMenu, popupSwitch } = popupSlice.actions
  const { toggleAlertActive } = alertSlice.actions
  const { userEnter, userLoginStore } = authSlice.actions
  const [userLogin] = authApi.useUserLoginMutation()

  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isUserEnterError, setIsUserEnterError] = useState<boolean>(false)
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

  const loginHandle = async () => {
    if (login && password && !isUserEnterError) {
      changeLoading(true)
      const user = { login: login, password: password }
      await userLogin(user)
        .unwrap()
        .then(res => {
          dispatch(popupSwitch({ isPopupActive: false, popupChildren: '' }))
          dispatch(toggleActiveMobileMenu(false))
          dispatch(toggleAlertActive({ message: 'You have successfully logged in', isActive: true, textColor: '#35c41f' }))
          dispatch(userEnter(res.token))
          dispatch(userLoginStore(user))
          changeLoading(false)
        })
        .catch((e) => {
          setIsUserEnterError(true)
          changeLoading(false)
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
    changeLoading(false)
  }

  return (
    <>
      <div className={cl.form__inputs}>
        <input type={'text'} className={cl.form__input} placeholder={'Login'} value={login} onChange={(e) => {
          setIsUserEnterError(false)
          setLogin(e.target.value.trim())
        }}
          autoFocus
        />
        <div className={cl.form__item}>
          <input type={passwordVisible ? 'text' : 'password'} className={cl.form__input} placeholder={'Password'}
            value={password} onChange={(e) => {
              setIsUserEnterError(false)
              setPassword(e.target.value.trim())
            }} />
          <div className={cl.form__icon} onClick={() => setPasswordVisible(!passwordVisible)}>
            {!passwordVisible ? <EyeVisible /> : <EyeHidden />}
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