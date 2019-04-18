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
const touchStart = e => console.log('touchStart', e.touches[0]);
const touchEnd  = e => console.log('touchEnd',e.touches[0]);
const touchMove = e => console.log('touchMove', e.touches[0]);

const div = document.createElement('div');

document.body.appendChild(div);
div.className = 'div';
div.addEventListener( 'touchstart', touchStart );
div.addEventListener( 'touchend', touchEnd );
div.addEventListener( 'touchmove', touchMove );