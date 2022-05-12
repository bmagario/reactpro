import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

interface IFormValues {
	firstName: string;
	lastName: string;
	email: string;
}

export const FormikYupPage = () => {
	const {
		handleSubmit,
		errors,
		touched,
		getFieldProps
	} = useFormik<IFormValues>({
		initialValues: {
			firstName: '',
			lastName: '',
			email: ''
		},
		onSubmit: (values: IFormValues) => {
			console.log(values);
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.required('Required')
				.min(3, 'Must be at least 3 characters')
				.max(10, 'Must be less than 10 characters'),
			lastName: Yup.string()
				.required('Required')
				.min(3, 'Must be at least 3 characters')
				.max(10, 'Must be less than 10 characters'),
			email: Yup.string()
				.required('Required')
				.email('Invalid email address')
		})
	});

	return (
		<div>
			<h1>Formik Yup Tutorial</h1>			
			<form noValidate onSubmit={ handleSubmit }>
				<label htmlFor='firstName'></label>
				<input
					type='text'
					placeholder='First Name'
					{ ...getFieldProps('firstName') }
				/>
				{ touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

				<label htmlFor='lastName'></label>
				<input
					type='text'
					placeholder='Last Name'
					{ ...getFieldProps('lastName') }
				/>
				{ touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }

				<label htmlFor='email'></label>
				<input
					type='email'
					placeholder='Email'
					{ ...getFieldProps('email') }
				/>
				{ touched.email && errors.email && <span>{ errors.email }</span> }

				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}
