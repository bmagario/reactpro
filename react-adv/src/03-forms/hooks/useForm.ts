import { ChangeEvent } from 'react';
import { useState } from 'react';

export const useForm = <T>(initialState:T) => {
	const [formData, setFormData] = useState<T>(initialState);


	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData(prev => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	}

	const resetForm = () => {
		setFormData(initialState);
	}

	return {
		...formData,
		formData,
		handleChange,
		resetForm
	}
}
