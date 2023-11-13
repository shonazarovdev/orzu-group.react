import { useEffect, useState } from 'react';
import { ProductCard } from "../components";
import data from "../data/products.json";

const Page = ({ page }) => {
	const [ products, setProducts ] = useState([]);

	useEffect(() => {
		data.data.forEach(el => {
			if ( el.category === page ) setProducts(el.products)
		});
	}, [page]);

	return (
		<>
			{ products.map(el => (
				<ProductCard key={ el.id } { ...el } />
			)) }
		</>
	)
}

export default Page;