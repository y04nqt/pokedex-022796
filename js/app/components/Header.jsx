import React from 'react'

import AppBar from '@material-ui/core/AppBar';

const Header = () => {
    return (
        <AppBar id="header" position="sticky" color='primary'>
            <img id="pokedex-logo" src="../../../imgs/pokedex-logo.png"/>
        </AppBar>
    )
}

export default Header