import { useContext } from "react";
import { productContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export const ProductName = ({ name }: { name?: string }) => {
	const { product } = useContext(productContext);
	let nameShow = name 
									? name 
									: product.name ? product.name : '';
	return (
		<span className={ styles.productDescription }>{ nameShow }</span>
	);
}