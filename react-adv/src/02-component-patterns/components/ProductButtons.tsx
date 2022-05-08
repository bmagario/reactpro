import { CSSProperties, useContext } from "react";
import { productContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface IProductButtonsProps {
	className?: string;
	style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: IProductButtonsProps) => {
	const { counter, increase, decrease, isMaxCountReached } = useContext(productContext);

	return (
		<div className={ `${styles.buttonsContainer} ${className}` } style={ style } >
			<button
				className={ styles.buttonMinus }
				onClick={ decrease }
			>
				-
			</button>
			<div className={ styles.countLabel }>{ counter }</div>
			<button
				className={ `${styles.buttonAdd} ${isMaxCountReached() ? styles.disabled : ''}` }
				onClick={ increase }
			>
				+
			</button>
		</div>
	);
}