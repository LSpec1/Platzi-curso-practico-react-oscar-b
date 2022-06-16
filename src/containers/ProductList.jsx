import React from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';

const ProductList = () => {
	return (
		<section className="main-container">
			<div className="ProductList">
				<ProductItem name="Bike" price="120,00"/>
				<ProductItem name="Bike" price="20,00"/>
				<ProductItem name="Bike" price="520,00"/>
				<ProductItem name="Bike" price="320,00"/>
				<ProductItem name="Bike" price="10,00"/>
				<ProductItem name="Bike" price="220,00"/>
			</div>
		</section>
	);
}

export default ProductList;
