import { ErrorMessage, useField } from 'formik';
 
interface IMyCheckboxProps {
	id?: string;
	name: string;
	label: string;
	placeholder?: string;
	className?: string;
	[x:string]: any;
}
export const MyCheckbox = ({ label, ...props }: IMyCheckboxProps) => {
	const [field] = useField({...props, type:'checkbox' });
	return (
		<>
			<label htmlFor={ props.id || props.name }>
				<input type='checkbox' className={ props.className } { ...field } { ...props } />
				{ label }
			</label>
			<ErrorMessage name={ props.name } component='span'/>
		</>
	);
};