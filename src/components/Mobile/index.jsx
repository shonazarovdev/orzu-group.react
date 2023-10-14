import React from 'react';

const Mobile = ({ children }) => {
	return (
		<div className="mobile">
			<header>
				<img src="/img/header.webp" alt="Restaurant" />
			</header>
			<main>
				{ children }
			</main>
			<footer>
				<a href="https://github.com/themaverickmu" target="_blank" title="Website Developer">
					Developed by: themaverickmu
				</a>
			</footer>
		</div>
	);
}

export default Mobile;