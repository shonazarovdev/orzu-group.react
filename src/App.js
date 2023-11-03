import { Header, ProductCard } from "./components";

function App() {

	const data = [
		{
			id: 1,
			name: 'Burger',
			count: '1 уп. 20 шт.',
			image: '/img/burger.webp',
			hash: 'LnP=.xt6ysM|?bkCRkjY%$R*aKsn',
			alt: 'lavash',
			price: '30.000'
		}, {
			id: 2,
			name: 'Lavash',
			count: '1 уп. 20 шт.',
			image: '/img/lavash.webp',
			hash: 'LMS~kqjZyFtRxuogWAV?%%kCMvWB',
			alt: 'lavash',
			price: '29.000'
		}, {
			id: 3,
			name: 'Hot Dog',
			count: '1 уп. 20 шт.',
			image: '/img/hotdog.webp',
			hash: 'LkQl,sRl*0n$.9ozRPRPt-jYRObI',
			alt: 'lavash',
			price: '22.000'
		},
	]

	return (
		<div className="wrapper">
			<div className="mobile">
				<Header />
				<main>
					{ data.map(item => (
						<ProductCard key={ item.id } { ...item } />
					)) }
				</main>
				<footer>Footer</footer>
			</div>
		</div>
	);
}

export default App;
