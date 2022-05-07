import { createContext, CSSProperties, ReactElement } from 'react';
import { useCounter } from '../hooks/useCounter';
import { IProduct, IProductContextProps, onChangeArgs } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

// Context
export const productContext = createContext<IProductContextProps>(null as any);
const { Provider } = productContext;

export interface IProductCardProps {
	product: IProduct;
	children?: ReactElement | ReactElement[];
	className?: string;
	style?: CSSProperties;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
}

export const ProductCard = ({ children, product, className, style, onChange, value }: IProductCardProps) => {
	const { counter, increase, decrease } = useCounter({ onChange, product, value });

	return (
		<Provider value={{
			counter,
			increase, 
			decrease,
			product
		}} >
			<div className={ `${styles.productCard} ${className}` } style={ style } >
				{ children }
			</div>
		</Provider>
	)
}