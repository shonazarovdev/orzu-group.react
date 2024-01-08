import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { BiSearch } from 'react-icons/bi';
import { MdClear } from 'react-icons/md';
import { TbPhoneCall, TbTruckDelivery } from 'react-icons/tb';
import { AiOutlineShop } from 'react-icons/ai';
import routes_json from '../../data/routes.json';

const Header = ({}) => {
	const [ open, setOpen ] = useState(false);
	const [ active, setActive ] = useState('/');
	const { pathname } = useLocation();

	const handleOpen = () => {
		setOpen(prev => !prev);
		if ( !open ) {
			window.document.body.style.removeProperty("overflow");
			window.document.body.style.removeProperty("height");
		} else {
			window.document.body.style.overflow = "hidden";
			window.document.body.style.height = "100vh";
		}
	}

	const handleClick = (path) => {
		setActive(path);
		setOpen(prev => !prev);
	}

	const pageUp = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		if (pathname !== active) {
			setActive(pathname);
		}
	}, [pathname]);

	return <header id="header">

		<div className={ clsx("wrap", open && "active") }>

			<aside className={ clsx(open && "active") }>
				<div className="top"></div>
				<div className="body">
					<div className="wrap">

						<div className="search">
							<div className="i"><BiSearch size="20px" /></div>
							<input type="text" placeholder="Поиск..." />
							<div className="i clean"><MdClear size="20px" /></div>
						</div>

						<div className="list">
							{ routes_json.data.map(e => (
								<Link to={ e.path } className={ clsx("i", active === e.path && "active") } onClick={ () => handleClick(e.path) } key={ e.id }>
									<span>•</span>{ e.title }
								</Link>
							)) }
						</div>

						<div className="info">
							<div className="b">
								<div className="t">Иш вакти:</div>
								<div className="v">
									<span className="i">
										<AiOutlineShop size="20px" />
									</span>
									Дуконимиз - 9:00 дан 20:00 гача
								</div>
								<div className="v">
									<span className="i">
										<TbTruckDelivery size="20px" />
									</span>
									Доставка - 10:00 дан 17:00 гача
								</div>
							</div>
							<div className="b">
								<div className="t">Телефон:</div>
								<a href="tel:998972111115" className="v">
									<span className="i">
										<TbPhoneCall size="20px" />
									</span>
									+998 97 211 11 15
								</a>
							</div>
						</div>

					</div>
				</div>
			</aside>

			<div className="burger">
				<div className={ clsx("i", open && "active") } onClick={ handleOpen }>
					<span></span>
					<span></span>
					<span></span>
					<div className="t">Menu</div>
				</div>
			</div>

			<div className="logo" onClick={ pageUp }>
				ORZU GROUP
			</div>

		</div>

	</header>
}

export default Header;