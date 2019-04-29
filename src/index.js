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

import { observer } from 'mobx-react'
import mobx from 'mobx'
import React from "react"
import ReactDOM from "react-dom"
@observer
class TodoList extends React.Component {
  render() {
    const store = thi   s.props.store; 
    return (
      <div>
        { store.report }
        <ul>
        { store.todos.map(
          (todo, idx) => <TodoView todo={ todo } key={ todo.id } />
        ) }
        </ul>
        { store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null }
        <button onClick={ this.onNewTodo }>New Todo</button>
        <small> (double-click a todo to edit)</small>
        <RenderCounter />
      </div>
    );
  }

  onNewTodo = () => { 
    this.props.store.addTodo(prompt('Enter a new todo:','coffee plz')); 
  } 
}

class TodoView extends React.Component {
  render() {
    const todo = this.props.todo;
    return (
      <li onDoubleClick={ this.onRename }>
        <input 
          type='checkbox'
          checked={ todo.completed }
          onChange={ this.onToggleCompleted } 
        />
        { todo.task }
        { todo.assignee 
          ? <small>{ todo.assignee.name }</small> 
          : null
        }
        <RenderCounter />
      </li>
    ); 
  }

  onToggleCompleted = () => {
    const todo = this.props.todo;
    todo.completed = !todo.completed;
  }

  onRename = () => {
    const todo = this.props.todo;
    todo.task = prompt('Task name', todo.task) || ""; 
  } 
}

ReactDOM.render(
  <TodoList store={ observableTodoStore } />, 
  document.getElementById('reactjs-app')
);