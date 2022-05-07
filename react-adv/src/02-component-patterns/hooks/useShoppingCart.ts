import { useState } from "react";
import { onChangeArgs, IProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<{ [key:string]: IProductInCart }>({});

	const onProductQuantityChange = ({ product, quantity }: onChangeArgs) => {
		
		setShoppingCart(oldShoppingCart => {
			if(quantity === 0) {
				const { [product.id]: toDelete, ...rest } = oldShoppingCart;
				return rest;
			} else {
				return {
					...oldShoppingCart,
					[product.id]: {
						...product,
						quantity 
					}
				}
			}
		});
	}

	return {
		shoppingCart,
		onProductQuantityChange
	}
}
