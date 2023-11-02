import React from "react";

const ProductCard = (props) => {
	return (
		<div className="product">
			<div className="img">
				<img src={ props.image } alt={ props.alt } loading={ 'lazy' } />
			</div>
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