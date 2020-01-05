import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Copyright from './Copyright'

export default function() {
	return(
		<footer style={{position: 'fixed', bottom: 0, left: 0, display: 'block', width: '100%'}}>
			<Container maxWidth="lg">
				<Typography variant="h6" align="center" gutterBottom>
					PCMASTERRACE
				</Typography>
				<Copyright />
			</Container>
    	</footer>
		
	)
}