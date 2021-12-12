import React from 'react'
import '../style/components/collapse.scss'
import { ReactComponent as Open } from '../assets/imgs/iconCollapseOpen.svg'
import { ReactComponent as Close } from '../assets/imgs/iconCollapseClose.svg'

class Collapse extends React.Component {
	constructor(props) {
		super(props)
		this.title = props.title
		this.state = { open: false }
	}
	handleClick = () => {
		this.setState(state => ({
			open: !state.open,
		}))
	}

	render() {
		const Icon = this.state.open ? <Open className="collapse__icon" /> : <Close className="collapse__icon" />
		return (
			<div className={this.props.fullWidth ? 'collapse collapse--fullWidth' : 'collapse'}>
				<button className="collapse__title" aria-expanded={this.state.open} onClick={this.handleClick}>
					{this.title} {Icon}
				</button>
				<div className={this.state.open ? 'collapse__content' : 'collapse__content collapse__content--close'}>{this.props.children}</div>
			</div>
		)
	}
}

export default Collapse
