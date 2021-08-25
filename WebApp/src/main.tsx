import React from 'react'
import ReactDOM from 'react-dom'
import { CssBaseline } from '@material-ui/core'

import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
	<React.Fragment>
		<CssBaseline />
		<App />
	</React.Fragment>,
	document.getElementById('root')
)
