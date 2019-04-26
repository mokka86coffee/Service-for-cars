// import store from './store';
// import App from './App';
// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from 'react-redux';
// import PropTypes from 'prop-types';

// import './index.scss';

// ReactDOM.render(
//     <Provider store = {store}>
//         <App />
//     </Provider>, 
//     document.querySelector('#root')
// );


// import ReactDOMServer from 'react-dom/server';

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


class ObservableTodoStore {
    @observable todos = [];
    @observable pendingRequests = 0;

    constructor() {
        mobx.autorun(() => console.log(this.report));
    }

    @computed get completedTodosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }

    @computed get report() {
        if (this.todos.length === 0)
            return "<none>";

        return `Next todo: "${this.todos[0].task}". ` + 
            `Progress: ${this.completedTodosCount}/${this.todos.length}`; 
    }

    addTodo(task) {
        this.todos.push({ 
            id: Date.now(),
            task: task,
            completed: false,
            assignee: null
        });
    }
}

const observableTodoStore = new ObservableTodoStore();