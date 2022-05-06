import { ProductCard, ProductImage, ProductName, ProductButtons} from '../components/';
import '../styles/custom-styles.css';

const product = {
	id: "1",
	name: "Coffee Mug",
	price: 10,
	image: "coffee-mug.png"
};

export const ShopingPage = () => {
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
				<ProductCard product={ product } className='bg-dark'>
					<ProductCard.Image className='custom-image' />
					<ProductCard.Name className='text-white' />
					<ProductCard.Buttons className='custom-buttons' />
				</ProductCard>
				<ProductCard product={ product } className='bg-dark'>
					<ProductImage className='custom-image'/>
					<ProductName name={ 'Hello Product' } className='text-white'/>
					<ProductButtons className='custom-buttons'/>
				</ProductCard>
				<ProductCard product={ product } style={{
					backgroundColor: "red"
				}}>
					<ProductImage />
					<ProductName name={ 'Hello Product' } />
					<ProductButtons style={{
						display: "flex",
						justifyContent: "end"
					}}/>
				</ProductCard>

			</div>
		</div>
	)
}
