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