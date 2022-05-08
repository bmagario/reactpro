import { onChangeArgs, IProduct, InitialValues } from './../interfaces/interfaces';
import { useLayoutEffect, useRef, useState } from 'react';

interface IUseCounterProps {
	onChange?: (args: onChangeArgs) => void;
	product: IProduct;
	value?: number;
	initialValues?: InitialValues;
}
export const useCounter = ({ onChange, product, value = 0, initialValues }: IUseCounterProps) => {
	const [counter, setCounter] = useState(initialValues?.quantity || value);
	const isControlled = useRef(!!onChange);
	const isMounted = useRef(false);

	useLayoutEffect(() => {
		if(!isMounted.current) return;
		setCounter(value);
	}, [value]);

	useLayoutEffect(() => {
		isMounted.current = true;
	}, []);

	const increase = () => {
		let newValue = counter + 1;
		if(initialValues?.maxCount) {
			newValue = Math.min(newValue, initialValues.maxCount);
		}

		if(isControlled.current) {
			return onChange!({ product, quantity: newValue });
		}

		setCounter(newValue);
		onChange && onChange({ product, quantity: newValue });
	}

	const decrease = () => {
		const newValue = Math.max(counter - 1, 0);
		if(isControlled.current) {
			return onChange!({ product, quantity: newValue });
		}
		setCounter(newValue);
		onChange && onChange({ product, quantity: newValue });
	}

	const reset = () => {
		setCounter(initialValues?.quantity || value);
	}

	return {
		counter,
		increase,
		decrease,
		reset
	}
}
