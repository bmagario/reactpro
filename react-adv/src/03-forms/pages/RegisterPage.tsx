import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";

import '../styles/styles.css';

interface IRegisterFormData {
	name: string;
	email: string;
	password: string;
	password2: string;
}

const initialState = {
	name: '',
	email: '',
	password: '',
	password2: ''
};

const isValidEmail = ( email: string ) => {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

export const RegisterPage = () => {
	const {
		name,
		email,
		password,
		password2,
		handleChange,
		resetForm
	} = useForm<IRegisterFormData>(initialState);
	
	const handleRegister = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	}

	return (
		<div>
			<h1>RegisterPage</h1>
			<form noValidate onSubmit={ handleRegister }>
				<input 
					type="text" 
					placeholder="Name"
					name="name"
					value={ name }
					onChange={ handleChange }
					className={ `${ name.trim().length <= 0  && 'has-error' }` }
				/>
				{ name.trim().length <= 0 && <span>Name is required</span> }

				<input 
					type="email" 
					placeholder="Email"
					name="email"
					value={ email }
					onChange={ handleChange }
					className={ `${ !isValidEmail(email)  && 'has-error' }` }
				/>
				{ !isValidEmail(email) && <span>Email is not valid</span> }

				<input 
					type="password"
					placeholder="Password"
					name="password"
					value={ password }
					onChange={ handleChange }
					className={ `${ password.trim().length <= 0  && 'has-error' }` }
				/>
				{ password.trim().length <= 0 && <span>Password is required</span> }
				{ (password.trim().length < 6 && password.trim().length > 0) && <span>Password must have at least 6 characters</span> }

				<input 
					type="password"
					placeholder="Repeat Password"
					name="password2"
					value={ password2 }
					onChange={ handleChange }
				className={ `${ password2.trim().length <= 0  && 'has-error' }` }
				/>
				{ password2.trim().length <= 0 && <span>Password is required</span> }
				{ (password2.trim().length > 0 && password === password2) && <span>Password must match</span> }
				
				<button
					type="submit"
				>
					Register
				</button>
				<button
					type="button"
					onClick={ resetForm }
				>
					Reset
				</button>
			</form>
		</div>
	)
}
