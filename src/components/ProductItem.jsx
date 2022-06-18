import React, { useState } from 'react';
import '../styles/ProductItem.scss';

import img_cart from '../assets/icons/bt_add_to_cart.svg'

const ProductItem = ({ product }) => {
	const [cart, setCart] = useState(0);

	const handleCart = () => {
		setCart(cart+1);
	}

	return (
		<div className="ProductItem">
			<img src={product.images} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
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
