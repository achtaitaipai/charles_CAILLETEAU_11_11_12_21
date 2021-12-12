import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import '../style/components/404.scss'

class NoMatch extends React.Component {
	render() {
		return (
			<main>
				<h1>404</h1>
				<p>Oups! La page que vous demandez n'existe pas.</p>
				<Link to="/">Retourner sur la page d’accueil</Link>
			</main>
		)
	}
}
export default NoMatch
