import { ProductCard, ProductImage, ProductName, ProductButtons} from '../components/';
import { products } from '../data/Products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { IProduct } from '../interfaces/interfaces';
import '../styles/custom-styles.css';

export const ShopingPage = () => {
	const { shoppingCart, onProductQuantityChange } = useShoppingCart();
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr/>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "space-around",
					alignItems: "center",
					marginTop: "20px"
				}}
			>
				
				{
				products.map((product: IProduct) => (
					<ProductCard 
						key={ product.id }
						product={ product }
						className='bg-dark'
						onChange={ onProductQuantityChange }
						value={ shoppingCart[product.id]?.quantity || 0 }
					>
						<ProductImage className='custom-image'/>
						<ProductName className='text-white'/>
						<ProductButtons className='custom-buttons'/>
					</ProductCard>
				))
				}
			</div>
			
			<div className='shopping-cart'>
				{
				Object.entries(shoppingCart).map(([key, product]) => (
					<ProductCard  
						key={ key }
						product={ product } 
						className='bg-dark'
						style={{
							width: "100px"
						}}
						onChange={ onProductQuantityChange }
						value={ product.quantity }
					>
						<ProductImage className='custom-image'/>
						<ProductName className='text-white'/>
						<ProductButtons 
							className='custom-buttons'
							style={{
								display: "flex",
								justifyContent: "center",
							}}
						/>
					</ProductCard>
					))
				}
			</div>
		</div>
	)
}
