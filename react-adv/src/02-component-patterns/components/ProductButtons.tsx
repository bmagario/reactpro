import { useContext } from "react";
import { productContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export const ProductButtons = () => {
	const { counter, increase, decrease } = useContext(productContext);

	return (
		<div className={ styles.buttonsContainer }>
			<button
				className={ styles.buttonMinus }
				onClick={ decrease }
			>
				-
			</button>
			<div className={ styles.countLabel }>{ counter }</div>
			<button
				className={ styles.buttonAdd }
				onClick={ increase }
			>
				+
			</button>
		</div>
	);
}