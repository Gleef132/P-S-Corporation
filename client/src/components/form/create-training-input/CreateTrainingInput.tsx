import useAutosizeTextArea from '@/hooks/useAutosizeTextArea';
import React, { FC, useRef } from 'react'
import cl from './CreateTrainingInput.module.scss'
import HelpSvg from '/public/help.svg'

interface Props {
	text: string;
	setText: (text: string) => void;
	title: string;
	helpText: string;
	counter: number;
	isDescription: boolean;
	placeholder: string;
	setHelperText: (text: React.ReactNode) => void;
	helperMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void;
	helperMouseLeave: () => void;
	id: string;
}

const CreateTrainingInput: FC<Props> = ({ text, setText, counter, helpText, title, isDescription, placeholder, helperMouseEnter, helperMouseLeave, setHelperText, id }) => {

	const textAreaRef = useRef<HTMLTextAreaElement>(null)

	useAutosizeTextArea(textAreaRef.current, text)

	const errorTextName = text.length > counter && text.trim() ? 'Title too long' :
		'Your training must have a title'
	const errorTextDescription = text.length > counter ? 'Description too long' : ''
	const errorInputCondition = isDescription ? false : !text.trim()

	const showHelper = (e: React.MouseEvent<HTMLDivElement>) => {
		setHelperText(<p>{helpText}</p>)
		helperMouseEnter(e)
	}

	const hiddenHelper = () => {
		helperMouseLeave()
	}

	return (
		<label htmlFor={id}>
			<div className={errorInputCondition === true || text.length > counter ? `${cl.input} ${cl.error}` : cl.input}
				style={
					{
						paddingBottom: '23px',
						minHeight: isDescription ? '150px' : '100px'
					}
				}
			>
				<span>{title}
					<div className={cl.input__help}
						onMouseEnter={(e) => showHelper(e)}
						onMouseLeave={hiddenHelper}
					>
						<HelpSvg />
					</div> </span>
				<textarea ref={textAreaRef} autoFocus={!isDescription} id={id} value={text} placeholder={placeholder} onChange={(e) => setText(e.target.value)}
				></textarea>
				<div className={cl.input__counter}>{text.length}/{counter}</div>
				<div className={cl.input__error}>{isDescription ? errorTextDescription : errorTextName}</div>
			</div>
		</label>
	)
}

export default CreateTrainingInput