import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Markdown from './Markdown'
import Header from './Header'
import Footer from './Footer'

class SingleArticle extends React.Component {
	
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	
	render() {
		return(
			<>
				<Header />
				<Container maxWidth="lg">
					<Grid container spacing={5} justify="center" className="mainGrid">
						<Grid item xs={12} md={8}>
							<Markdown>
								{this.props.location.state.content}
							</Markdown>
						</Grid>
					</Grid>
				</Container>
				<Footer />
			</>
		)
	}
}


export default SingleArticle