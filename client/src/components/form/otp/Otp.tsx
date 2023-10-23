import { FC, useEffect, useRef, useState } from 'react'
import cl from './Otp.module.scss'

let currentOTPIndex = 0;

interface IOtpProps {
  getOtpCode: (code: string) => void;
}

const Otp: FC<IOtpProps> = ({ getOtpCode }) => {

  const [otp, setOtp] = useState(new Array(4).fill(''))
  const [activeOTPIndex, setActiveOTPIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const otpChangeHandle = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.value.replace(/[\D]/g, '') || e.target.value === '') {
      currentOTPIndex = index;
      const newOTP = [...otp]
      newOTP[currentOTPIndex] = e.target.value
      if (e.target.value) {
        setActiveOTPIndex(currentOTPIndex + 1)
      }
      setOtp(newOTP)
    }
  }

  useEffect(() => {
    if (otp.length === 4) {
      getOtpCode(otp.join(''))
    }
  }, [otp])

  const otpKeyHandle = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.code === 'Backspace') {
      currentOTPIndex = index;
      setActiveOTPIndex(currentOTPIndex - 1)
    }
    if (e.code === 'Tab') {
      currentOTPIndex = index;
      setActiveOTPIndex(currentOTPIndex)
    }
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [activeOTPIndex])



  return (
    <div className={cl.form__code} onPaste={(e) => {
      if (e.clipboardData.getData('text').length > 4) return false
      setOtp(e.clipboardData.getData('text').split(''))
    }}>
      {otp.map((item, index) => {
        return <input key={index} maxLength={1} type="text" ref={index === activeOTPIndex ? inputRef : null} value={otp[index]} className={cl.form__input} onKeyUp={(e) => otpKeyHandle(e, index)} onChange={(e) => otpChangeHandle(e, index)} autoFocus={index === 0 ? true : false} />
      })}
    </div>
  )
}

export default Otp