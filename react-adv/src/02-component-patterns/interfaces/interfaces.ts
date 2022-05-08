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
	reset: () => void;
	maxCount: number;
	isMaxCountReached: () => boolean;
}

export interface IProduct {
	id: string;
	name: string;
	price?: number;
	image?: string;
}

export interface onChangeArgs {
	product: IProduct;
	quantity: number;
}

export interface IProductInCart extends IProduct {
	quantity: number;
}

export interface InitialValues {
	quantity?: number;
	maxCount?: number;
}

export interface IProductCartHandlers {
	quantity: number;
	isMaxCountReached: () => boolean;
	maxCount?: number;
	product: IProduct;

	increase: () => void;
	decrease: () => void;
	reset: () => void;
}