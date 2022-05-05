import { useState } from 'react';

export const useCounter = () => {
	const [counter, setCounter] = useState(0);

	const increase = () => {
		setCounter(prev => prev + 1);
	}

	const decrease = () => {
		setCounter(prev => Math.max(prev - 1, 0));
	}

	return {
		counter,
		increase,
		decrease
	}
}
