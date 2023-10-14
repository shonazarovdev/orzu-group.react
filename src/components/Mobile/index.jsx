import React from 'react';

const Mobile = ({ children }) => {
	return (
		<div className="mobile">
			<header>
				<img src="/img/header.webp" alt="Restaurant"/>
			</header>
			<main>
				{ children }
			</main>
		</div>
	);
}

export default Mobile;