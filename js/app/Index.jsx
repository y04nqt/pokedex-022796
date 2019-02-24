import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'

import Theme from './theme'

// import component and store here
// (using root for easier store/provider
// support for testing for later)

import Layout from './Layout'
import Root from "./store"

ReactDOM.render(
    <Root>
        <MuiThemeProvider theme={Theme}>
            <CssBaseline>
                <Layout />
            </CssBaseline>
        </MuiThemeProvider>
    </Root>
    , document.getElementById('app'));