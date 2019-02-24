import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'

import Theme from './theme'

import Layout from './Layout'

ReactDOM.render(
    <div>
        <MuiThemeProvider theme={Theme}>
            <CssBaseline>
                <Layout />
            </CssBaseline>
        </MuiThemeProvider>
    </div>
    , document.getElementById('app'));