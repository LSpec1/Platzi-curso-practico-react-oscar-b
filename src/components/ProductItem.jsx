import React, { useState } from 'react';
import '../styles/ProductItem.scss';

import img_cart from '../assets/icons/bt_add_to_cart.svg'
const imgBike = "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

const ProductItem = (props) => {
	const [cart, setCart] = useState(0);

	const handleCart = () => {
		setCart(cart+1);
	}

	return (
		<div className="ProductItem">
			<img src={imgBike} alt="" />
			<div className="product-info">
				<div>
					<p>${props.price}</p>
					<p>{props.name}</p>
				</div>
				<figure onClick={handleCart}>
					<img src={img_cart} alt="" />
					{cart}
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
