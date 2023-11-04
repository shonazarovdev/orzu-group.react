import { Footer, Header, ProductCard } from "./components";

function App() {

	const data = [
		{
			id: 1,
			name: 'Baton',
			count: '1 уп. 20 шт.',
			image: '/img/baton.webp',
			hash: 'LRPE^*p0u5-;.8tlRjR,*0skSiM|',
			alt: 'lavash',
			price: '30.000'
		}, {
			id: 2,
			name: 'Lavash',
			count: '1 уп. 20 шт.',
			image: '/img/lavash.webp',
			hash: 'LHS5nZMaRpnhmitRo#R5u6M_pKae',
			alt: 'lavash',
			price: '29.000'
		}, {
			id: 3,
			name: 'Pita',
			count: '1 уп. 20 шт.',
			image: '/img/pita.webp',
			hash: 'LZPE|^ozt,x[VykBbwRP.mofWYe.',
			alt: 'lavash',
			price: '22.000'
		},
	]

	return (
		<div id="wrapper">
			<div id="mobile">
				<Header />
				<main id="main">
					{ data.map(item => (
						<ProductCard key={ item.id } { ...item } />
					)) }
				</main>
				<Footer />
			</div>
		</div>
	);
}

export default App;
