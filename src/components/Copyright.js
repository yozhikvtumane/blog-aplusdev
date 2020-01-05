import React from 'react'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'

export default function() {
	return (
		<Typography variant="body2" color="white" align="center">
			{'By Anton © '}
			<MuiLink color="white" href="https://pcmasterrac3.github.io/">
				PCMASTERRACE
			</MuiLink>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}
