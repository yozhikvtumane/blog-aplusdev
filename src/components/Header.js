import React from "react"
import { Link as RouterLink } from 'react-router-dom'
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"

export default function Header(props) {
	return (
		<Toolbar className="mainToolbar toolbarDivider">
			<Container maxWidth="lg" className="mainToolbarInner">
				{props.mainPage ? ( 
					<Button size="small" color="secondary">Subscribe</Button> ) : (
						<RouterLink to="/">
							<Button size="small" color="secondary">&lt; Home</Button>
						</RouterLink>
					)
				}
				
				<Typography
					component="h2"
					variant="h5"
					color="white"
					align="center"
					noWrap
					className="toolbarTitle"
				>
				PCMASTERRACE
				</Typography>
				<Button variant="outlined" size="small" color="secondary">
					Sign up
				</Button>
			</Container>
		</Toolbar>
	)
}