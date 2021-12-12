import React from 'react'
import '../style/components/carousel.scss'

class Carousel extends React.Component {
	constructor(props) {
		super(props)
		this.state = { frame: 0 }
	}

	handlePrev = () => {
		this.setState(state => ({
			frame: state.frame > 0 ? state.frame - 1 : this.props.children.length - 1,
		}))
	}

	handleNext = () => {
		this.setState(state => ({
			frame: (state.frame + 1) % this.props.children.length,
		}))
	}

	render() {
		const style = { '--frame': this.state.frame }
		return (
			<div className="carousel" style={style} tabIndex="1">
				<div className="carousel__slides">
					{this.props.children.map((child, index) => (
						<figure className="carousel__slide" key={index} id={'slide-' + index}>
							{child}
						</figure>
					))}
				</div>
				<p className="carousel__legend">
					{this.state.frame + 1}/{this.props.children.length}
				</p>
				<button className="carousel__btn carousel__btn--prev" onClick={this.handlePrev}>
					{'<'}
				</button>
				<button className="carousel__btn carousel__btn--next" onClick={this.handleNext}>
					{'>'}
				</button>
			</div>
		)
	}
}
export default Carousel
