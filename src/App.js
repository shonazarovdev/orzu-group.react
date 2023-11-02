import { Header, ProductCard } from "./components";

function App() {

	const data = [
		{
			id: 1,
			name: 'Lavash',
			count: '1 уп. 20 шт.',
			image: 'https://uprostim.com/wp-content/uploads/2021/05/image032-6.jpg',
			alt: 'lavash',
			price: '29.000'
		}
	]

	return (
		<div className="wrapper">
			<div className="mobile">
				<Header />
				<main>
					{ data.map(item => (
						<ProductCard key={item.id} {...item} />
					)) }
				</main>
				<footer>Footer</footer>
			</div>
		</div>
	);
}

export default App;
