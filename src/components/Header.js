import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/components/header.scss'
import { ReactComponent as Logo } from '../assets/imgs/logo.svg'

class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<NavLink to="/">
					<Logo title="logo de Casa" />
				</NavLink>
				<nav className="header__nav">
					<NavLink to="/" exact={true} className="header__link" activeClassName="actif">
						Accueil
					</NavLink>
					<NavLink to="/about" className="header__link" activeClassName="actif">
						À Propos
					</NavLink>
				</nav>
			</header>
		)
	}
}
export default Header
