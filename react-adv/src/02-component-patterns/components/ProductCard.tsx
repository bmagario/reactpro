import { createContext } from 'react';
import { useCounter } from '../hooks/useCounter';
import { IProductCardProps, IProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

// Context
export const productContext = createContext<IProductContextProps>(null as any);
const { Provider } = productContext;

export const ProductCard = ({ children, product }: IProductCardProps) => {
	const { counter, increase, decrease } = useCounter();

	return (
		<Provider value={{
			counter,
			increase, 
			decrease,
			product
		}} >
			<div className={ styles.productCard }>
				{ children }
			</div>
		</Provider>
	)
}