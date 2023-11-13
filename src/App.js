import { AppRouter, Footer, Header } from "./components";

function App() {
	return (
		<div id="wrapper">
			<div id="mobile">
				<Header />
				<main id="main">
					<AppRouter />
				</main>
				<Footer />
			</div>
		</div>
	);
}

export default App;
