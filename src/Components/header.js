import React from 'react'
import "./header.css"

import { NavLink } from 'react-router-dom'


const Header = (props) => {
	
	let items = props.state.menuItems.map(i=> <NavLink className="nav_link" to={i.paths}>{i.title}</NavLink>)


// let list = props.paths.map(l=> <li className="nav_el">
// 	 					<NavLink className="nav_link" to={l.paths}>{l.menuItem}</NavLink>
// 						</li>)
	return (
		<header className="header">
			<nav className="header_menu">
				<ul className="nav_menu">
					<li className="nav_el">
						{items}
					</li>)
				</ul>
			</nav>

		</header>
	)
}



export default Header 