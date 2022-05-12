import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';

interface IFormValues {
	firstName: string;
	lastName: string;
	email: string;
}

export const FormikBasicPage = () => {
	const validate = (values: IFormValues) => {
		const errors: FormikErrors<IFormValues> = {};
		if (!values.firstName) {
			errors.firstName = 'Required';
		} else if(values.firstName.length <= 3) {
			errors.firstName = 'Must be at least 3 characters';
		}

		if (!values.lastName) {
			errors.lastName = 'Required';
		} else if(values.lastName.length <= 3) {
			errors.lastName = 'Must be at least 3 characters';
		}

		if (!values.email) {
			errors.email = 'Required';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			errors.email = 'Invalid email address';
		}

		return errors;
	}

	const {
		handleChange,
		values,
		handleSubmit,
		errors,
		touched,
		handleBlur
	} = useFormik<IFormValues>({
		initialValues: {
			firstName: '',
			lastName: '',
			email: ''
		},
		onSubmit: (values: IFormValues) => {
			console.log(values);
		},
		validate
	});

	return (
		<div>
			<h1>Formik Basic Tutorial</h1>			
			<form noValidate onSubmit={ handleSubmit }>
				<label htmlFor='firstName'></label>
				<input
					type='text'
					name='firstName'
					placeholder='First Name'
					onBlur={ handleBlur }
					onChange={ handleChange }
					value={ values.firstName }
				/>
				{ touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

				<label htmlFor='lastName'></label>
				<input
					type='text'
					name='lastName'
					placeholder='Last Name'
					onBlur={ handleBlur }
					onChange={ handleChange }
					value={ values.lastName }
				/>
				{ touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }

				<label htmlFor='email'></label>
				<input
					type='email'
					name='email'
					placeholder='Email'
					onBlur={ handleBlur }
					onChange={ handleChange }
					value={ values.email }
				/>
				{ touched.email && errors.email && <span>{ errors.email }</span> }

				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}
