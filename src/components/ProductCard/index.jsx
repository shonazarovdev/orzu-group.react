import React from "react";
import ImageComponent from "../ImageComponent";

const ProductCard = (props) => {
	return (
		<div className="product">
			<ImageComponent src={props.image} alt={props.alt} hash={props.hash} />
			<div className="info">
				<div className="n">{ props.name }</div>
				<div className="c">{ props.count }</div>
				<div className="p">{ props.price }</div>
				<div className="btn">Добавить в корзину</div>
			</div>
		</div>
	);
}

export default ProductCard;