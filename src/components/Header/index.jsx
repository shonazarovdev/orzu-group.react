import { useState } from "react";
import clsx from "clsx";
import { BiSearch } from 'react-icons/bi';
import { MdClear } from 'react-icons/md';
import { TbPhoneCall, TbTruckDelivery } from 'react-icons/tb';
import { AiOutlineShop } from 'react-icons/ai';

const Header = ({}) => {
	const [ open, setOpen ] = useState(false);
	const [ active, setActive ] = useState(1);

	const handleOpen = () => {
		setOpen(prev => !prev);
		if ( open ) {
			window.document.body.style.removeProperty("overflow");
			window.document.body.style.removeProperty("height");
		} else {
			window.document.body.style.overflow = "hidden";
			window.document.body.style.height = "100vh";
		}
	}

	const handleClick = (num) => {
		setActive(num);
		setOpen(prev => !prev);
	}

	const pageUp = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

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
							<a href="#" className={ clsx("i", active === 1 && "active") } onClick={ () => handleClick(1) }><span>•</span>Нон махсулотлари</a>
							<a href="#" className={ clsx("i", active === 2 && "active") } onClick={ () => handleClick(2) }><span>•</span>Картошка махсулотлари</a>
							<a href="#" className={ clsx("i", active === 3 && "active") } onClick={ () => handleClick(3) }><span>•</span>Майонез махсулотлари</a>
							<a href="#" className={ clsx("i", active === 4 && "active") } onClick={ () => handleClick(4) }><span>•</span>Соус махсулотлари</a>
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
								<a href="#" className="v">
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