import { ErrorMessage, useField } from 'formik';
 
interface ITextInputProps {
	id?: string;
	name: string;
	label: string;
	type?: 'text' | 'number' | 'email' | 'password';
	placeholder?: string;
	className?: string;
	[x:string]: any;
}
export const MyTextInput = ({ label, ...props }: ITextInputProps) => {
	const [field] = useField(props);
	return (
		<>
			<label htmlFor={ props.id || props.name }>{ label }</label>
			<input className={ props.className } { ...field } { ...props } />
			<ErrorMessage name={ props.name } component='span'/>
		</>
	);
};