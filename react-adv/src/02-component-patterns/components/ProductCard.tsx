import { createContext, CSSProperties, useCallback } from 'react';
import { useCounter } from '../hooks/useCounter';
import { InitialValues, IProduct, IProductCartHandlers, IProductContextProps, onChangeArgs } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

// Context
export const productContext = createContext<IProductContextProps>(null as any);
const { Provider } = productContext;

export interface IProductCardProps {
	product: IProduct;
	children?: (args: IProductCartHandlers) => JSX.Element;
	className?: string;
	style?: CSSProperties;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues
}

export const ProductCard = ({ 
	children,
	product,
	className,
	style,
	onChange,
	value,
	initialValues
}: IProductCardProps) => {
	const { counter, increase, decrease, reset } = useCounter({ onChange, product, value, initialValues });

	const maxCount = initialValues?.maxCount || 0;
	const isMaxCountReached = useCallback(
		() => !!maxCount && counter === maxCount,
		[counter, maxCount]
	);
	
	return (
		<Provider value={{
			counter,
			increase, 
			decrease,
			product,
			maxCount,
			isMaxCountReached,
			reset
		}} >
			<div className={ `${styles.productCard} ${className}` } style={ style } >
				{ children && children({
					quantity: counter,
					maxCount,
					isMaxCountReached,
					product,
					decrease,
					increase,
					reset
				}) }
			</div>
		</Provider>
	)
}