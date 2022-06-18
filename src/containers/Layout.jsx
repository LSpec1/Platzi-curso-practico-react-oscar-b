import React from 'react';
import Header from '../components/Header';

const Layout = ({ children }) => { //habilita que hayan objetos dentro
	return (
		<div className="Layout">
			<Header />
			{children}
		</div>
	);
}

export default Layout;
