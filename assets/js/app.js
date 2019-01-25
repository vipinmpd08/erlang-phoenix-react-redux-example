// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"

import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import store from './store/configureStore';

import TransactionsScene from './scenes/Transactions'

// React BaseApp
class ReactApp extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={TransactionsScene} />
                </div>
            </Router>
        )
    }
}

//Render Base
ReactDOM.render(
    <Provider store={store}>
        <ReactApp />
    </Provider>
    ,
    document.getElementById("transaction-app-base-react-container")
)