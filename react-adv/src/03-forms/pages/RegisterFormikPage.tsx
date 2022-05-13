import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';
import '../styles/styles.css';

interface IFormValues {
	name: string;
	email: string;
	password: string;
	passwordConfirmation: string;
}

export const RegisterFormikPage = () => {

	return (
		<div>
			<h1>Formik Abstract Tutorial</h1>
			<Formik
				initialValues={{
					name: '',
					email: '',
					password: '',
					passwordConfirmation: ''
				}}
				onSubmit={ (values:IFormValues, { setSubmitting }) => {
					setSubmitting(false);
					console.log(values);
				}}
				validationSchema={ Yup.object({
					name: Yup.string()
						.required('Required')
						.min(2, 'Must be at least 2 characters')
						.max(15, 'Must be less than 15 characters'),
					email: Yup.string()
						.required('Required')
						.email('Invalid email address'),
					password: Yup.string()
						.required('Required')
						.min(6, 'Must be at least 6 characters'),
					passwordConfirmation: Yup.string()
						.required('Required')
						.min(6, 'Must be at least 6 characters')
						.oneOf([Yup.ref('password'), null], 'Passwords must match')
				})}
			>
				{
					({ handleReset }) => (
						<Form>
							<MyTextInput 
								label='Name'
								name='name'
								id='name'
								placeholder='Name'
								className='text-input'
								type='text'
							/>
							<MyTextInput 
								label='Email'
								name='email'
								id='email'
								placeholder='Email'
								className='text-input'
								type='email'
							/>
							<MyTextInput 
								label='Password'
								name='password'
								id='password'
								placeholder='Password'
								className='text-input'
								type='password'
							/>
							<MyTextInput 
								label='Password Confirmation'
								name='passwordConfirmation'
								id='passwordConfirmation'
								placeholder='Password Confirmation'
								className='text-input'
								type='password'
							/>

							<button type='submit'>Submit</button>
							<button type='button' onClick={ handleReset }>Reset</button>
						</Form>
					)
				}
			</Formik>
		</div>
	)
}
