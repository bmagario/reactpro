import { CSSProperties, useContext } from "react";
import { productContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface IProductNameProps {
	name?: string;
	className?: string;
	style?: CSSProperties;
}

export const ProductName = ({ name, className, style }: IProductNameProps) => {
	const { product } = useContext(productContext);
	let nameShow = name 
									? name 
									: product.name ? product.name : '';
	return (
		<span className={ `${styles.productDescription} ${className}` } style={ style } >{ nameShow }</span>
	);
}