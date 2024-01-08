import React from "react";
import { TbPhoneCall, TbTruckDelivery } from 'react-icons/tb';
import { AiOutlineShop } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsTelegram, BsInstagram } from 'react-icons/bs'

const Footer = () => {
	return (
		<footer id="footer">
			<div className="top">
				<div className="b">
					<div className="t">Иш вакти</div>
					<div className="v"><span className="i"><AiOutlineShop size={22} /></span>Дуконимиз - 9:00 дан 20:00 гача</div>
					<div className="v"><span className="i"><TbTruckDelivery size={22} /></span>Доставка - 10:00 дан 17:00 гача</div>
				</div>
				<div className="b">
					<div className="t">Адрес</div>
					<a href="https://yandex.com/maps/-/CCU9jGXidA" className="v"><span className="i"><HiOutlineLocationMarker size={22} /></span>Ургенч, Хорезм</a>
				</div>
				<div className="b">
					<div className="t">Телефон</div>
					<a href="tel:998972111115" className="v"><span className="i"><TbPhoneCall size={22} /></span>+998 97 211 11 15</a>
					<a href="tel:998976011115" className="v"><span className="i"><TbPhoneCall size={22} /></span>+998 97 601 11 15</a>
				</div>
				<div className="b s">
					<div className="t">Ижтимоий тармоклар</div>
					<div className="v"><span className="i"><BsTelegram size={25} /></span></div>
					<div className="v"><span className="i"><BsInstagram size={25} /></span></div>
				</div>
			</div>
			<div className="bottom">
				<a href="https://github.com/shonazarovdev" target="_blank" rel="noreferrer" title="Developer">Dasturchi: shonazarovdev</a>
			</div>
		</footer>
	)
}

export default Footer;