import { onChangeArgs, IProduct } from './../interfaces/interfaces';
import { useEffect, useRef, useState } from 'react';

interface IUseCounterProps {
	onChange?: (args: onChangeArgs) => void;
	product: IProduct;
	value?: number;
}
export const useCounter = ({ onChange, product, value = 0 }: IUseCounterProps) => {
	const [counter, setCounter] = useState(value);

	const isControlled = useRef(!!onChange);

	useEffect(() => {
		setCounter(value);
	}, [value]);

	const increase = () => {
		if(isControlled.current) {
			return onChange!({ product, quantity: counter + 1 });
		}
		const newValue = counter + 1;
		setCounter(newValue);
		onChange && onChange({ product, quantity: newValue });
	}

	const decrease = () => {
		if(isControlled.current) {
			return onChange!({ product, quantity: Math.max(counter - 1, 0) });
		}
		const newValue = Math.max(counter - 1, 0);
		setCounter(newValue);
		onChange && onChange({ product, quantity: newValue });
	}

	return {
		counter,
		increase,
		decrease
	}
}
