import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = { logements: [] }
	}
	componentDidMount() {
		fetch('logements.json')
			.then(response => response.json())
			.then(logements => {
				this.setState({ logements: logements })
			})
			.catch(console.error)
	}

	render() {
		return (
			<ul>
				{this.state.logements.map((logement, index) => (
					<li key={index}>
						<Link to={'/logement/' + logement.id}>{logement.title}</Link>
					</li>
				))}
			</ul>
		)
	}
}
export default Home
