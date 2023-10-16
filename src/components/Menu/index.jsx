import React, { useState } from 'react';
import clsx from "clsx";

const Menu = ({ openMenu, handleOpenMenu }) => {
	const [ activePage, setActivePage ] = useState('non-maxsulotlari');

	const handleActivePage = (name) => {
		handleOpenMenu()
		setActivePage(name)
	}

	return (
		<div className="menu">
			<div className={ clsx("body", openMenu && "active") }>
				<div className="l">
					<a href="#" onClick={ () => handleActivePage('non-maxsulotlari') } className={clsx(activePage === 'non-maxsulotlari' && 'active')}>Нон махсулотлари</a>
					<a href="#" onClick={ () => handleActivePage('kartoshka-maxsulotlari') } className={clsx(activePage === 'kartoshka-maxsulotlari' && 'active')}>Картошка махсулотлари</a>
					<a href="#" onClick={ () => handleActivePage('mayonez-maxsulotlari') } className={clsx(activePage === 'mayonez-maxsulotlari' && 'active')}>Майонез махсулотлари</a>
					<a href="#" onClick={ () => handleActivePage('sous-maxsulotlari') } className={clsx(activePage === 'sous-maxsulotlari' && 'active')}>Соус махсулотлари</a>
					<a href="#" onClick={ () => handleActivePage('fastfood-maxsulotlari') } className={clsx(activePage === 'fastfood-maxsulotlari' && 'active')}>Фастфуд упаковкалар</a>
				</div>
			</div>
		</div>
	);
}

export default Menu;