import { ProductCard, ProductImage, ProductName, ProductButtons} from '../components/';
import { products } from '../data/Products';
import '../styles/custom-styles.css';

const product = products[0];

export const ShopingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr/>
			<ProductCard 
				key={ product.id }
				product={ product }
				className='bg-dark'
				initialValues={{
					quantity: 4,
					maxCount: 10
				}}
			>
				{
					({ reset }) => (
						<>
							<ProductImage className='custom-image'/>
							<ProductName className='text-white'/>
							<ProductButtons className='custom-buttons'/>

							<button onClick={reset}>Reset</button>
						</>
					)
				}
			</ProductCard>
		</div>
	)
}
