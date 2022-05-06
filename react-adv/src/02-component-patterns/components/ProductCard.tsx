import { createContext, CSSProperties, ReactElement } from 'react';
import { useCounter } from '../hooks/useCounter';
import { IProduct, IProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

// Context
export const productContext = createContext<IProductContextProps>(null as any);
const { Provider } = productContext;

export interface IProductCardProps {
	product: IProduct;
	children?: ReactElement | ReactElement[];
	className?: string;
	style?: CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: IProductCardProps) => {
	const { counter, increase, decrease } = useCounter();

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