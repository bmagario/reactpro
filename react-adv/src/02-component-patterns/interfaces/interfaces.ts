import { ReactElement } from 'react';

export interface IProductCardProps {
	product: IProduct;
	children?: ReactElement | ReactElement[];
}

export interface IProductCardHOCProps {
	({ children, product }: IProductCardProps): JSX.Element;
  Buttons: () => JSX.Element;
	Image: ({ image }: { image?: string;	}) => JSX.Element;
	Name: ({ name }: { name?: string; }) => JSX.Element;
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