import { IProductNameProps } from './../components/ProductName';
import { IProductImageProps } from '../components/ProductImage';
import { IProductButtonsProps } from './../components/ProductButtons';
import { IProductCardProps } from "../components/ProductCard";

export interface IProductCardHOCProps {
	({ children, product }: IProductCardProps): JSX.Element;
  Buttons: (Props: IProductButtonsProps) => JSX.Element;
	Image: (Props: IProductImageProps) => JSX.Element;
	Name: (Props: IProductNameProps) => JSX.Element;
}

export interface IProductContextProps {
	product: IProduct;
	counter: number;
	increase: () => void;
	decrease: () => void;
}

export interface IProduct {
	id: string;
	name: string;
	price?: number;
	image?: string;
}