import React from 'react'
import '../style/components/footer.scss'
import { ReactComponent as Logo } from '../assets/imgs/logoFooter.svg'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<Link to="/home">
					<Logo title="logo de Casa" className="footer__logo" />
				</Link>
				<p className="footer__copiryght">© 2020 Kasa. All rights reserved</p>
			</footer>
		)
	}
}
export default Footer
