import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

interface IFormValues {
	firstName: string;
	lastName: string;
	email: string;
}

export const FormikComponents = () => {

	return (
		<div>
			<h1>Formik Components Tutorial</h1>
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
							<label htmlFor='firstName'>First Name</label>
							<Field name='firstName' type='text' />
							<ErrorMessage name='firstName' component='span'/>
			
							<label htmlFor='lastName'>Last Name</label>
							<Field name='lastName' type='text' />
							<ErrorMessage name='lastName' component='span' />
			
							<label htmlFor='email'>Email Address</label>
							<Field name='email' type='email' />
							<ErrorMessage name='email' component='span' />

							<label htmlFor='jobtypes'>Job Type</label>
							<Field name="jobtypes" as="select" className="my-select">
								<option value="frontend">Frontend</option>
								<option value="backend">Backend</option>
								<option value="fullstack">Fullstack</option>
							</Field>

							<label htmlFor='terms'>Terms & Conditions</label>
							<Field name='terms' type='checkbox' />
							<ErrorMessage name='terms' component='span' />

							<button type='submit'>Submit</button>
						</Form>
					)
				}
			</Formik>
		</div>
	)
}
