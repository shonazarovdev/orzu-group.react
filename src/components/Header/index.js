import { useState } from "react";
import clsx from "clsx";
import { BiSearch } from 'react-icons/bi'
import { MdClear } from 'react-icons/md'

const Header = ({}) => {
	const [ open, setOpen ] = useState(false);

	const handleOpen = () => {
		setOpen(!open);
		if ( open ) {
			window.document.body.style.removeProperty("overflow");
			window.document.body.style.removeProperty("height");
		} else {
			window.document.body.style.overflow = "hidden";
			window.document.body.style.height = "100vh";
		}
	}

	const pageUp = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return <header id="header">

		<div className="wrap">

			<aside className={ clsx(open && "active") }>
				<div className="body">
					<div className="wrap">

						<div className="search">
							<div className="i"><BiSearch size="20px" /></div>
							<input type="text" placeholder="Поиск..." />
							<div className="i"><MdClear size="20px" /></div>
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