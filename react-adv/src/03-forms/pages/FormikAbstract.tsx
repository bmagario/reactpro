import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components';
import '../styles/styles.css';

interface IFormValues {
	firstName: string;
	lastName: string;
	email: string;
}

export const FormikAbstract = () => {

	return (
		<div>
			<h1>Formik Abstract Tutorial</h1>
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					terms: false,
					jobType: ''
				}}
				onSubmit={ (values:IFormValues, { setSubmitting }) => {
					setSubmitting(false);
					console.log(values);
				}}
				validationSchema={ Yup.object({
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
						.email('Invalid email address'),
					terms: Yup.boolean()
						.required('Required')
						.oneOf([true], 'You must accept the terms and conditions'),
					jobType: Yup.string()
						.required('Required')
						.oneOf(['frontend', 'backend', 'fullstack'], 'Invalid job type')
				})}
			>
				{
					(formik) => (
						<Form>
							<MyTextInput 
								label='First Name'
								name='firstName'
								id='firstName'
								placeholder='First Name'
								className='text-input'
								type='text'
							/>
							<MyTextInput 
								label='Last Name'
								name='lastName'
								id='lastName'
								placeholder='Last Name'
								className='text-input'
							/>
							<MyTextInput 
								label='Email'
								name='email'
								id='email'
								placeholder='Email'
								className='text-input'
								type='email'
							/>
							<MySelect 
								label='Job Types'
								name='jobtypes'
								id='jobtypes'
								placeholder='Select a Job'
							>
								<option value="frontend">Frontend</option>
								<option value="backend">Backend</option>
								<option value="fullstack">Fullstack</option>
							</MySelect>
							
							<MyCheckbox 
								label='Terms & Conditions'
								name='terms'
								id='terms'
								placeholder='terms'
								className='text-input'
							/>

							<button type='submit'>Submit</button>
						</Form>
					)
				}
			</Formik>
		</div>
	)
}
