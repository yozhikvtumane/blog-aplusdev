import React, { Component, Fragment } from "react"
import Footer from './Footer'
import Header from './Header'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import StickyFooter from './StickyFooter'

class About extends Component {
	render() {
		return(
			<Fragment>
				<Header />
				<Container maxWidth="lg">
					<Grid container spacing={5} justify="center" className="mainGrid">
						<Grid item xs={12} md={8}>
							<Typography variant="body1">
								Tento blog je předním cílem pro technické nadšence všech úrovní dovedností. Ať už stavíte počítač, kupujete notebook nebo se učíte, jak vytvořit roboty s vašimi dětmi, máme k dispozici komplexní redakční zdroje a živou komunitu odborníků, kteří vám pomohou na vaší cestě. A nejen počítače, ale také o technologiích kolem nás.
							</Typography>
							<Typography variant="h6">
								<p>Technologie použité k vytvoření tohoto blogu:</p>
							</Typography>
							<Typography variant="body1">
								React <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">https://reactjs.org/</a><br />
								React-router <a href="https://reacttraining.com/react-router/" target="_blank" rel="noopener noreferrer">https://reacttraining.com/react-router/</a><br />
								Material-UI, React UI framework <a href="https://material-ui.com/" target="_blank" rel="noopener noreferrer">https://material-ui.com/</a>
							</Typography>
						</Grid>
					</Grid>
				</Container>
				<StickyFooter />
			</Fragment>
		)
	}
}

export default About