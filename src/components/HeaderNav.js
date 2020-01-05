import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar'
import MuiLink from '@material-ui/core/Link'

export default function() {
	
	return (
		<Toolbar component="nav" variant="dense" className="toolbarSecondary toolbar">
			<MuiLink
				color="inherit"
				noWrap
				key="home"
				variant="body1"
				underline="hover"
				className="toolbarLink"
				component={ props => {
					return <RouterLink to="/" {...props}>Home</RouterLink>	
				}}
			/>
			<MuiLink
				color="inherit"
				noWrap
				key="about"
				variant="body1"
				underline="hover"
				className="toolbarLink"
				component={ props => {
					return <RouterLink to="/about" {...props}>About</RouterLink>	
				}}
			/>
		</Toolbar>
	)
}
