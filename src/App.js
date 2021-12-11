import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import Footer from './components/Footer'
import NoMatch from './components/NoMatch'
import Logement from './components/Logement'

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<BrowserRouter>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/logement/:id">
							<Logement />
						</Route>
						<Route>
							<NoMatch />
						</Route>
					</Switch>
				</BrowserRouter>
				<Footer />
			</div>
		)
	}
}

export default App
