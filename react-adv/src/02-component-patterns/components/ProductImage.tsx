import { CSSProperties, useContext } from "react";
import { productContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface IProductImageProps {
	image?: string;
	className?: string;
	style?: CSSProperties;
}

export const ProductImage = ({ image = '', className, style }: IProductImageProps) => {
	const { product } = useContext(productContext);
	let imgToShow = image 
									? image 
									: product.image ? product.image : noImage;

	return (
		<img src={ imgToShow } alt="product" className={ `${styles.productImg} ${className}` } style={ style } />
	);
}