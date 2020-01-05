import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainBlogPage from '../components/Blog'
import SingleArticle from '../components/SingleArticle'
import About from '../components/About'

export default function() {
	return(
		<Fragment>
			<Router>
				<Switch>
					<Route exact path="/">
						<MainBlogPage />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/:articleId"
						render={props => {
							return <SingleArticle {...props} />
							}}>
					</Route>
				</Switch>
			</Router>
		</Fragment>
	)
}