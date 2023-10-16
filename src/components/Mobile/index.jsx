import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { GrLocation } from 'react-icons/gr';
import { AiOutlineShop } from 'react-icons/ai';
import {BsTruck} from 'react-icons/bs'

const Mobile = ({ children }) => {
	return (
		<div className="mobile">
			<header>
				<img src="/img/header.webp" alt="Restaurant" />
			</header>
			<main>
				<div className="top">
					<h1>ORZU GROUP</h1>
					<div className="b">
						<div>
							<span className="i"><GrLocation /></span>
							<a href="https://yandex.com/maps/-/CCU9jGXidA" title="Office location">Ургенч, Узбекистан</a>
						</div>
						<div>
							<span className="i"><BiPhoneCall /></span>
							<a href="tel:+998976011115" title="Phone number">+998 97 601 11 15</a>
						</div>
						<div>
							<div className="i"><AiOutlineShop /></div>
							Дуконимиз иш вахти 9:00 - 20:00 гача
						</div>
						<div>
							<div className="i"><BsTruck /></div>
							Доставка иш вахти 10:00 - 17:00 гача
						</div>
					</div>
				</div>
				{ children } // Outlet
			</main>
			<footer>
				<a href="https://github.com/shonazarovdev" target="_blank" rel="noreferrer" title="Website Developer">Developed by: shonazarovdev</a>
			</footer>
		</div>
	);
}

export default Mobile;