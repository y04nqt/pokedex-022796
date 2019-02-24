import React from 'react'

import Header from "./components/Header"
import PokedexContainer from './containers/PokedexContainer'

class Layout extends React.Component {
    render(){
        return (
            <div id="layout">
                <Header />
                <PokedexContainer />
            </div>
        )
    }
}

export default Layout