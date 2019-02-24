import React from 'react'

import Header from "./components/Header"

class Layout extends React.Component {
    render(){
        return (
            <div id="layout">
                <Header />
                <h1>The answer to life, the Universe, and everything</h1>
            </div>
        )
    }
}

export default Layout