import { ChangeEvent, FC, useState } from 'react'
import cl from './SignUp.module.scss'
import Button from '@/components/ui/button/Button';
import { popupSlice } from '@/store/reducers/popup/PopupSlice';
import { alertSlice } from '@/store/reducers/alert/AlertSlice';
import { authApi } from '@/services/UserService';
import { authSlice } from '@/store/reducers/auth/AuthSlice';
import useCountdown from '@/hooks/useCountdown';
import { useAppDispatch } from '@/hooks/redux';
import { generateCode } from '../../../../utils/GenerateCode';
import Xmark from 'public/xmark.svg'
import Check from 'public/check.svg'
import EyeVisible from 'public/eye.svg'
import EyeHidden from 'public/eye-off.svg'
import Otp from '../../otp/Otp';

interface ISignUpProps {
  changeValidateText: (text: string) => void;
  changeFormTitle: (value: string) => void;
  changeFormType: (value: string) => void;
  changeLoading: (state: boolean) => void;
}

const SignUp: FC<ISignUpProps> = ({ changeValidateText, changeFormTitle, changeFormType, changeLoading }) => {

  const dispatch = useAppDispatch()
  const { popupSwitch } = popupSlice.actions
  const { toggleAlertActive } = alertSlice.actions
  const { userEnter, userRegistrationStore } = authSlice.actions
  const [userRegistration] = authApi.useUserRegistrationMutation()
  const [userActivate] = authApi.useUserActivateMutation()
  const [userCheck] = authApi.useUserCheckExistMutation()
  const [userNameCheck] = authApi.useUserNameCheckExistMutation()

  const [isVerifiedUser, setIsVerifiedUser] = useState<boolean>(false)
  const [isVerifiedUserName, setIsVerifiedUserName] = useState<boolean>(false)
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState<boolean>(false)
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repeatPassword, setRepeatPassword] = useState<string>('')
  const [userName, setUserName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [contentCount, setContentCount] = useState<number>(1)

  const [countdown, setCountdown, isCountdownStart, setIsCountdownStart] = useCountdown()
  const [otpCode, setOtpCode] = useState<string>('')
  const [activateCode, setActivateCode] = useState<string>('')
  const [isSentCodeError, setIsSentCodeError] = useState<boolean>(false)

  const changeCountContentHandle = (type: string, title: string, contentCount: number) => {
    changeFormType(type)
    changeFormTitle(title)
    changeValidateText('')
    changeLoading(false)
    setContentCount(contentCount)
  }

  const checkUserExistHandle = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.trim()
    setLogin(value)
    if (value) {
      setTimeout(() => {
        if (value === e.target.value.trim()) {
          userCheck(e.target.value.trim())
            .unwrap()
            .then(res => setIsVerifiedUser(res.isVerified))
            .catch((e) => changeValidateText(e))
        }
      }, 1000);
    } else {
      setIsVerifiedUser(false)
    }
  }

  const checkUserNameExistHandle = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.trim()
    setUserName(value)
    if (value) {
      setTimeout(() => {
        if (value === e.target.value.trim()) {
          userNameCheck(e.target.value.trim())
            .unwrap()
            .then(res => setIsVerifiedUserName(res.isVerified))
            .catch((e) => changeValidateText(e))
        }
      }, 1000);
    } else {
      setIsVerifiedUserName(false)
    }
  }

  const registerUserValidate = () => {
    if (isVerifiedUser && password && repeatPassword) {
      if (!isVerifiedUser) return changeValidateText('This user already exists')
      if ((password !== repeatPassword)) return changeValidateText('Passwords must be the same')
      changeCountContentHandle('signUp', 'Registration', contentCount + 1)
    } else {
      changeValidateText('Please fill in all fields')
    }
  }

  const registerDataValidate = async () => {
    if (!isVerifiedUserName) return changeValidateText('Change user name')
    if (!email.includes('@')) return changeValidateText('Enter correct mail')
    if (isSentCodeError) return changeValidateText('Please enter the correct mail')
    await sendLetter()
  }

  const refreshData = () => {
    changeValidateText('')
    setContentCount(1)
    setLogin('')
    setPassword('')
    setRepeatPassword('')
    setUserName('')
    setEmail('')
  }

  const registerHandle = async () => {
    if (otpCode === activateCode) {
      const user = {
        userName: userName,
        email: email,
        login: login,
        password: password
      }
      changeLoading(true)
      await userRegistration(user)
        .unwrap()
        .then(res => {
          dispatch(popupSwitch({ isPopupActive: false, popupChildren: '' }))
          dispatch(toggleAlertActive({ message: res.message, isActive: true, textColor: '#35c41f' }))
          dispatch(userEnter(res.token))
          dispatch(userRegistrationStore(user))
          refreshData()
          changeLoading(false)
        })
        .catch((e) => {
          changeValidateText(e.data.message)
          changeLoading(false)
        })
    } else {
      changeValidateText('Wrong code entered')
    }
  }

  const sendLetter = async () => {
    const code = generateCode(1000, 9999)
    console.log(code)
    setActivateCode('' + code)
    changeLoading(true)
    await userActivate({ email: email, code: code })
      .unwrap()
      .then(res => {
        setIsCountdownStart(true)
        changeCountContentHandle('signUp', 'Registration', contentCount + 1)
        changeValidateText('')
        setIsSentCodeError(false)
        changeLoading(false)
      })
      .catch((e) => {
        changeValidateText(e.data.message)
        setIsSentCodeError(true)
        changeLoading(false)
      })
  }

  const getFormContent = () => {
    switch (contentCount) {
      case 1:
        return <>
          <div className={cl.form__inputs}>
            <div className={cl.form__item}>
              <input type={'text'} className={cl.form__input} autoFocus placeholder={'Login'} value={login} onChange={(e) => checkUserExistHandle(e)} />
              <div className={isVerifiedUser ? `${cl.form__icon} ${cl.icon__green}` : `${cl.form__icon} ${cl.icon__red}`}>
                {isVerifiedUser ? <Check /> : <Xmark />}
              </div>
            </div>
            <div className={cl.form__item}>
              <input type={passwordVisible ? 'text' : 'password'} className={cl.form__input} placeholder={'Password'} value={password} onChange={(e) => setPassword(e.target.value.trim())} />
              <div className={cl.form__icon} onClick={() => setPasswordVisible(!passwordVisible)}>
                {!passwordVisible ? <EyeVisible /> : <EyeHidden />}
              </div>
            </div>
            <div className={cl.form__item}>
              <input type={repeatPasswordVisible ? 'text' : 'password'} className={cl.form__input} placeholder={'Repeat Password'} value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value.trim())} />
              <div className={cl.form__icon} onClick={() => setRepeatPasswordVisible(!repeatPasswordVisible)}>
                {!repeatPasswordVisible ? <EyeVisible /> : <EyeHidden />}
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
            <div className={cl.form__item}>
              <input type={'text'} className={cl.form__input} placeholder={'User Name'} value={userName} onChange={(e) => checkUserNameExistHandle(e)} />
              <div className={isVerifiedUserName ? `${cl.form__icon} ${cl.icon__green}` : `${cl.form__icon} ${cl.icon__red}`}>
                {isVerifiedUserName ? <Check /> : <Xmark />}
              </div>
            </div>
            <input type={'email'} className={cl.form__input} placeholder={'Email'} value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setIsSentCodeError(false)
              }} />
          </div>
          <div className={cl.form__btns}>
            <Button type="primary" clName={cl.form__btn} onClick={() => changeCountContentHandle('signUp', 'Registration', contentCount - 1)} >Back</Button>
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
            <Button type="primary" clName={cl.form__btn} onClick={() => changeCountContentHandle('signUp', 'Registration', contentCount - 1)} >Back</Button>
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