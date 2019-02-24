import React from 'react'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducers from './modules'

const middleware = applyMiddleware(promise, thunk, createLogger())

const Root = props => {
    // great way to pass the
    // provider and store for testing
    return (
        <Provider store={createStore(reducers, middleware)}>
            {props.children}
        </Provider>
    )
}

export default Root

Root.propTypes = {
    children: PropTypes.object
}