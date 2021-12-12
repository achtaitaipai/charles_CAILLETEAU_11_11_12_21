import React from 'react'
import { Link } from 'react-router-dom'
import '../style/components/banner.scss'
import '../style/components/logementsContainer.scss'
import banner from '../assets/imgs/bannerHome.jpg'

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
			<main>
				<figure className="banner">
					<img src={banner} className="banner__img" alt="paysage montagneux en bors de mer"></img>
					<figcaption className="banner__slogan">Chez vous, partout et ailleurs</figcaption>
				</figure>
				<section className="logementsContainer">
					{this.state.logements.map((logement, index) => (
						<Link to={'/logement/' + logement.id} className="logementCard" key={index}>
							<figure className="logementCard__imgContainer">
								<img src={logement.cover} className="logementCard__img" alt={logement.title}></img>
								<figcaption className="logementCard__legend">{logement.title}</figcaption>
							</figure>
						</Link>
					))}
				</section>
			</main>
		)
	}
}
export default Home
