import React from 'react'
import { withRouter } from 'react-router-dom'
import Carousel from '../components/Carousel'
import NoMatch from './NoMatch'
import Collapse from '../components/Collapse'
import '../style/components/description.scss'
import { ReactComponent as StarFull } from '../assets/imgs/starFull.svg'
import { ReactComponent as Star } from '../assets/imgs/star.svg'

class Logement extends React.Component {
	constructor(props) {
		super(props)
		this.state = { pictures: [], description: '', equipments: [], title: '' }
		this.id = this.props.match.params.id
	}
	componentDidMount() {
		fetch('../logements.json')
			.then(response => response.json())
			.then(logements => {
				const logement = logements.find(l => l.id === this.id) || 404
				this.setState({ logement })
			})
			.catch(console.error)
	}
	stars = n => {
		const tab = []
		for (let index = 1; index <= n; index++) {
			tab.push(
				<li key={index}>
					<StarFull />
				</li>
			)
		}
		for (let index = n; index < 5; index++) {
			tab.push(
				<li key={index + 1}>
					<Star />
				</li>
			)
		}
		return tab
	}
	render() {
		if (this.state.logement === 404) {
			return <NoMatch />
		} else if (this.state.logement) {
			const { pictures, description, equipments, title, location, tags, host, rating } = this.state.logement
			return (
				<main>
					<Carousel>
						{pictures.map((imageSrc, index) => (
							<img src={imageSrc} key={index} alt="vue du logement"></img>
						))}
					</Carousel>
					<section className="description">
						<header className="description__header">
							<div className="description__principal">
								<h1 className="description__title">{title}</h1>
								<p className="description__location">{location}</p>
								<ul className="description__tags">
									{tags.map((tag, index) => (
										<li key={index} className="description__tag">
											{tag}
										</li>
									))}
								</ul>
							</div>
							<div className="description__add">
								<div className="description__proprio">
									<p className="description__name"> {host.name}</p>
									<figure className="description__proprioPicture">
										<img src={host.picture} alt={host.name} />
									</figure>
								</div>
								<ul className="description__rating">{this.stars(rating)}</ul>
							</div>
						</header>
						<div className="description__details">
							<Collapse title="Description" fullWidth={true}>
								<p>{description}</p>
							</Collapse>
							<Collapse title="Equipements" fullWidth={true}>
								<ul>
									{equipments.map((eq, index) => (
										<li key={index} alt="vue du logement">
											{eq}
										</li>
									))}
								</ul>
							</Collapse>
						</div>
					</section>
				</main>
			)
		}
		return <p>chargement...</p>
	}
}
export default withRouter(Logement)
