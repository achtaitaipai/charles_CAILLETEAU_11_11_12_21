import React from 'react'
import { withRouter } from 'react-router-dom'
import NoMatch from './NoMatch'

class Logement extends React.Component {
	constructor(props) {
		super(props)
		this.state = { logements: [] }
		this.id = this.props.match.params.id
	}
	componentDidMount() {
		fetch('../logements.json')
			.then(response => response.json())
			.then(logements => {
				this.setState({ logement: logements.find(l => l.id === this.id) || 404 })
			})
			.catch(console.error)
	}
	render() {
		if (this.state.logement === 404) {
			return <NoMatch />
		}

		return (
			<div>
				<h2>Logement : {this.state.logement ? this.state.logement.id : ':('}</h2>
			</div>
		)
	}
}
export default withRouter(Logement)
