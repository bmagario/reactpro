import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';

const initialValues: { [key: string]: any } = {};
const fieldsWithValidation: { [key: string]: any } = {};

for(const input of formJson) {
	initialValues[input.name] = input.value || '';

	if(!input.validations) continue;

	let schema = Yup.string();

	for(const validation of input.validations) {
		if(validation.type === 'required') {
			schema = schema.required(validation.message);
		} else if(validation.type === 'minLength') {
			schema = schema.min((validation as any).value, validation.message);
		} else if(validation.type === 'email') {
			schema = schema.email(validation.message);
		}
	}
	fieldsWithValidation[input.name] = schema;
}

const validationSchema = Yup.object({...fieldsWithValidation});

export const DynamicForm = () => {
	return (
		<div>
			<h1>Dynamic Form</h1>

			<Formik
				initialValues={ initialValues }
				validationSchema={ validationSchema }
				onSubmit={ (values) => {
					console.log(values);
				}}
			>
				{ (formik) => (
					<Form noValidate>
						{ formJson.map(({ name, label, type, placeholder, value, options }) => {
							switch(type) {
								case 'text':
								case 'email':
								case 'password':
									return <MyTextInput
										key={ name } 
										type={ type as any } 
										name={ name } 
										label={ label } 
										placeholder={ placeholder }
										// value={ value }
									/>;
								case 'checkbox':
									return <MyCheckbox 
										key={ name } 
										type={ type as any } 
										name={ name } 
										label={ label } 
										placeholder={ placeholder }
										// value={ value }
									/>
								case 'select':
									return (
									<MySelect 
										key={ name } 
										name={ name } 
										label={ label } 
										// value={ value }
									>
										<option value="">Select an Option</option>
										{
											options?.map(({ id, name }) => (
												<option key={ id } value={ id }>{ name }</option>
											))
										}
									</MySelect>
								)
								default:
									return null;
							}
						})}
						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}
