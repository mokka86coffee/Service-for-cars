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

// ReactDOMServer.renderToNodeStream(<Provider store = {store}><App /></Provider>);

const touchMove = e => console.log(e);
{
    const style = document.createElement('style');
    style.innerHTML = `.div { 
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999999;
        background: red;
    }`;
    document.body.appendChild(style);
}

const div = document.createElement('div');

document.body.appendChild(div);
div.className = 'div';
div.addEventListener( 'touchstart', touchMove )