import { FC, useState } from 'react'
import cl from './SignUp.module.scss'
import Button from '@/components/ui/button/Button';
import { popupSlice } from '@/store/reducers/popup/PopupSlice';
import { alertSlice } from '@/store/reducers/alert/AlertSlice';
import { authApi } from '@/services/UserService';
import { authSlice } from '@/store/reducers/auth/AuthSlice';
import useCountdown from '@/hooks/useCountdown';
import { useAppDispatch } from '@/hooks/redux';
import { generateCode } from '@/utils/GenerateCode';
import EyeVisible from 'public/eye.svg'
import EyeHidden from 'public/eye-off.svg'
import Otp from '../../otp/Otp';

interface ISignUpProps {
  changeValidateText: (text: string) => void;
  changeFormTitle: (value: string) => void;
  changeFormType: (value: string) => void;
}

const SignUp: FC<ISignUpProps> = ({ changeValidateText, changeFormTitle, changeFormType }) => {

  const dispatch = useAppDispatch()
  const { popupSwitch } = popupSlice.actions
  const { toggleAlertActive } = alertSlice.actions
  const { userEnter, userRegistrationStore } = authSlice.actions
  const [userRegistration] = authApi.useUserRegistrationMutation()
  const [userActivate] = authApi.useUserActivateMutation()

  const [signUpPasswordVisible, setSignUpPasswordVisible] = useState<boolean>(false)
  const [signUpRepeatPasswordVisible, setSignUpRepeatPasswordVisible] = useState<boolean>(false)
  const [signUpLogin, setSignUpLogin] = useState<string>('')
  const [signUpPassword, setSignUpPassword] = useState<string>('')
  const [signUpRepeatPassword, setSignUpRepeatPassword] = useState<string>('')
  const [signUpUserName, setSignUpUserName] = useState<string>('')
  const [signUpEmail, setSignUpEmail] = useState<string>('')
  const [signUpContentCount, setSignUpContentCount] = useState<number>(1)

  const [countdown, setCountdown, isCountdownStart, setIsCountdownStart] = useCountdown()
  const [otpCode, setOtpCode] = useState<string>('')
  const [activateCode, setActivateCode] = useState<string>('')

  const changeCountContentHandle = (type: string, title: string, contentCount: number) => {
    changeFormType(type)
    changeFormTitle(title)
    changeValidateText('')
    setSignUpContentCount(contentCount)
  }

  const registerUserValidate = () => {
    if (signUpLogin && signUpPassword && signUpRepeatPassword) {
      if ((signUpPassword === signUpRepeatPassword)) {
        changeCountContentHandle('signUp', 'Registration', signUpContentCount + 1)
        changeValidateText('')
      } else {
        changeValidateText('Passwords must be the same')
      }
    } else {
      changeValidateText('Please fill in all fields')
    }
  }

  const registerDataValidate = async () => {
    if (signUpUserName && signUpEmail) {
      if (signUpEmail.includes('@')) {
        await sendLetter()
      } else {
        changeValidateText('Enter correct mail')
      }
    } else {
      changeValidateText('Please fill in all fields')
    }
  }

  const refreshData = () => {
    changeValidateText('')
    setSignUpContentCount(1)
    setSignUpLogin('')
    setSignUpPassword('')
    setSignUpRepeatPassword('')
    setSignUpUserName('')
    setSignUpEmail('')
  }

  const registerHandle = async () => {
    if (otpCode === activateCode) {
      const user = {
        userName: signUpUserName,
        email: signUpEmail,
        login: signUpLogin,
        password: signUpPassword
      }

      await userRegistration(user)
        .unwrap()
        .then(res => {
          dispatch(popupSwitch({ isPopupActive: false, popupChildren: '' }))
          dispatch(toggleAlertActive({ message: res.message, isActive: true, textColor: '#35c41f' }))
          dispatch(userEnter(res.token))
          dispatch(userRegistrationStore(user))
          refreshData()
        })
        .catch((e) => changeValidateText(e.data.message))
    } else {
      changeValidateText('Wrong code entered')
    }
  }

  const sendLetter = async () => {
    const code = generateCode(1000, 9999)
    console.log(code)
    setActivateCode('' + code)
    await userActivate({ email: signUpEmail, code: code })
      .unwrap()
      .then(res => {
        setIsCountdownStart(true)
        changeCountContentHandle('signUp', 'Registration', signUpContentCount + 1)
        changeValidateText('')
      })
      .catch((e) => changeValidateText(e.data.message))
  }

  const getFormContent = () => {
    switch (signUpContentCount) {
      case 1:
        return <>
          <div className={cl.form__inputs}>
            <input type={'text'} className={cl.form__input} placeholder={'Login'} value={signUpLogin} onChange={(e) => setSignUpLogin(e.target.value.trim())} />
            <div className={cl.form__item}>
              <input type={signUpPasswordVisible ? 'text' : 'password'} className={cl.form__input} placeholder={'Password'} value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value.trim())} />
              <div className={cl.form__icon} onClick={() => setSignUpPasswordVisible(!signUpPasswordVisible)}>
                {!signUpPasswordVisible ? <EyeVisible /> : <EyeHidden />}
              </div>
            </div>
            <div className={cl.form__item}>
              <input type={signUpRepeatPasswordVisible ? 'text' : 'password'} className={cl.form__input} placeholder={'Repeat Password'} value={signUpRepeatPassword} onChange={(e) => setSignUpRepeatPassword(e.target.value.trim())} />
              <div className={cl.form__icon} onClick={() => setSignUpRepeatPasswordVisible(!signUpRepeatPasswordVisible)}>
                {!signUpRepeatPasswordVisible ? <EyeVisible /> : <EyeHidden />}
              </div>
            </div>
          </div>
          <div className={cl.form__btns}>
            <Button type="primary" clName={cl.form__btn} onClick={() => changeCountContentHandle('signIn', 'Login', 1)} >Back</Button>
            <Button type="primary" clName={cl.form__btn} onClick={registerUserValidate}>Next</Button>
          </div>
        </>
        break
      case 2:
        return <>
          <div className={cl.form__inputs}>
            <input type={'text'} className={cl.form__input} placeholder={'User Name'} value={signUpUserName} onChange={(e) => setSignUpUserName(e.target.value)} />
            <input type={'email'} className={cl.form__input} placeholder={'Email'} value={signUpEmail}
              onChange={(e) => setSignUpEmail(e.target.value)} />
          </div>
          <div className={cl.form__btns}>
            <Button type="primary" clName={cl.form__btn} onClick={() => changeCountContentHandle('signUp', 'Registration', signUpContentCount - 1)} >Back</Button>
            <Button type="primary" clName={cl.form__btn} onClick={() => registerDataValidate()}>Next</Button>
          </div>
        </>
        break
      case 3:
        return <>
          <div className={cl.form__inputs}>
            <h2>Введите код{isCountdownStart ? `: ${countdown}` : ''}</h2>
            <Otp getOtpCode={setOtpCode} />
          </div>
          <Button type='primary' disable={isCountdownStart} clName={cl.form__code__btn} onClick={sendLetter} >Send Code</Button>
          <div className={cl.form__btns}>
            <Button type="primary" clName={cl.form__btn} onClick={() => changeCountContentHandle('signUp', 'Registration', signUpContentCount - 1)} >Back</Button>
            <Button type="primary" clName={cl.form__btn} onClick={registerHandle}>Register</Button>
          </div>
        </>
        break
      default:
        return null
        break;
    }
  }

  return (
    <>
      {getFormContent()}
    </>
  )
}

export default SignUp