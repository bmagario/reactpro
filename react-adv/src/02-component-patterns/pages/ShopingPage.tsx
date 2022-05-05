import { ProductCard, ProductImage, ProductName, ProductButtons} from '../components/';

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
				<ProductCard product={ product }>
					<ProductCard.Image />
					<ProductCard.Name />
					<ProductCard.Buttons />
				</ProductCard>
				<ProductCard product={ product }>
					<ProductImage />
					<ProductName name={ 'Hello Product' } />
					<ProductButtons />
				</ProductCard>

			</div>
		</div>
	)
}
