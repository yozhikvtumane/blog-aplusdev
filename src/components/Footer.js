import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Copyright from './Copyright'

function Footer() {
	return(
		<footer >
			<Container maxWidth="lg">
				<Typography variant="h6" align="center" gutterBottom>
					PCMASTERRACE
				</Typography>
				<Copyright />
			</Container>
    	</footer>
		
	)
}

export default Footer