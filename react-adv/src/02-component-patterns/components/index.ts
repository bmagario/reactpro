import { IProductCardHOCProps } from '../interfaces/interfaces';
import { ProductCard as ProductCardHOC } from './ProductCard';

import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductName } from './ProductName';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductName } from './ProductName';

export const ProductCard: IProductCardHOCProps = Object.assign(ProductCardHOC, {
	Buttons: ProductButtons,
	Image: ProductImage,
	Name: ProductName
});

export default ProductCard;