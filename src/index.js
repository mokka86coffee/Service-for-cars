import store from './store';
import App from './App';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import './index.scss';

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, 
    document.querySelector('#root')
);


import ReactDOMServer from 'react-dom/server';

ReactDOMServer.renderToNodeStream(<Provider store = {store}><App /></Provider>);