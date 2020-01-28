import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/rural-fencing-contractors_small.png";

const Header = () => {
	return (
		<div className="menu-section">
			<img src={Logo} alt="Logo" className="menu-img" />
			<NavLink
				exact
				to="/"
				activeClassName="is-active"
				className="menu-items"
			>
				Home
			</NavLink>
			<NavLink
				exact
				to="/about"
				activeClassName="is-active"
				className="menu-items"
			>
				About
			</NavLink>
			<NavLink
				exact
				to="/gallery"
				activeClassName="is-active"
				className="menu-items"
			>
				Gallery
			</NavLink>
			<NavLink
				exact
				to="/contact"
				activeClassName="is-active"
				className="menu-items"
			>
				Contact
			</NavLink>
			<div className="menu-contact">
				<a href="tel:0419 156 158">0419 156 158</a>
				<a href="mailto:admin@ruralfencing.com">
					admin@ruralfencing.com.au
				</a>
			</div>
		</div>
	);
};
export default Header;
