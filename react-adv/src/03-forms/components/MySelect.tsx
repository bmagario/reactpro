import { ErrorMessage, useField } from 'formik';
 
interface ISelectProps {
	id?: string;
	name: string;
	label: string;
	placeholder?: string;
	className?: string;
	[x:string]: any;
}
export const MySelect = ({ label, ...props }: ISelectProps) => {
	const [field] = useField(props);
	return (
		<>
			<label htmlFor={ props.id || props.name }>{ label }</label>
			<select className={ props.className } { ...field } { ...props } />
			<ErrorMessage name={ props.name } component='span'/>
		</>
	);
};