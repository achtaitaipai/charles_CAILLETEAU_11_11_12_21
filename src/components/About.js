import React from 'react'
import '../style/components/banner.scss'
import banner from '../assets/imgs/bannerAbout.jpg'
import Collapse from './Collapse'

class About extends React.Component {
	render() {
		return (
			<main className=".about">
				<figure className="banner">
					<img src={banner} className="banner__img" alt="paysage montagneux en bors de mer"></img>
				</figure>
				<Collapse title="Fiabilité" width="70%">
					<p>
						Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
						régulièrement vérifiées par nos équipes.
					</p>
				</Collapse>
				<Collapse title="Respect" width="70%">
					<p>
						La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une
						exclusion de notre plateforme.
					</p>
				</Collapse>
				<Collapse title="Service" width="70%">
					<p>
						Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre
						question.
					</p>
				</Collapse>
				<Collapse title="Sécurité">
					<p>
						La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis
						par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien
						respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
					</p>
				</Collapse>
			</main>
		)
	}
}
export default About
