import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


export default function() {
	return(
		<Paper className="welcomeHeader">
		<div className="overlay" />
			<Grid container>
				<Grid item md={6}>
					<div className="welcomeHeaderContent">
						<Typography
							component="h1"
							variant="h3"
							color="inherit"
							gutterBottom
						>
							PCMASTERRACE
						</Typography>
						<Typography 
							variant="h5"
							color="inherit"
							className=""
							paragraph
						>
						<br />
						<br />
						React blog about hardware
						<br />
						<br />
						</Typography>
					</div>
				</Grid>
			</Grid>
		</Paper>
	)
}