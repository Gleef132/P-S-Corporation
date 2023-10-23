import { FC } from 'react'
import cl from './CreateTrainingCheckbox.module.scss'

interface Props {
	id: string;
	text: string;
	name: string;
	checked?: string;
	type: string;
	onChange: (text: string) => void;
}


const CreateTrainingCheckbox: FC<Props> = ({ id, name, text, checked, type, onChange }) => {

	return <label htmlFor={id} className={cl.checkbox}>
		<input type="radio" name={name} id={id}
			onChange={() => onChange(type)}
			checked={checked === type ? true : false} />
		<span></span>
		{text}
	</label>
}

export default CreateTrainingCheckbox