import { IProduct } from "../interfaces/interfaces";

const product:IProduct = {
	id: "1",
	name: "Coffee Mug",
	price: 10,
	image: "coffee-mug.png"
};
const product2:IProduct = {
	id: "2",
	name: "Coffee Mug 2",
	price: 10,
	image: "coffee-mug2.png"
};
export const products: IProduct[] = [product, product2];
