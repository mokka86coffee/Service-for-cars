import store from './store';
// import App from './App';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import './index.scss';

// ReactDOM.render(
//     <Provider store = {store}>
//         <App />
//     </Provider>, 
//     document.querySelector('#root')
// );

const template = {
    notification: {
      message: 'Should we bake a pie?',
      type: 'caution',
      accept: function() {
        // parent component can do something with accept
      },
      decline: function() {
        // parent component can do something with decline
      }
    }
};
  
class Notification extends React.Component{

state = {
    typeChkArr: ['success', 'message', 'caution', 'error'],
    showConfirmation: true
}

accept = () => {
    this.props.accept();
    this.setState({ showConfirmation: false });
}

decline = () => {
    this.props.decline();
    this.setState({ showConfirmation: false });
}

render() {
    const { notification } = this.props;    
    const { typeChkArr, showConfirmation } = this.state;

    const classes = typeChkArr.includes(notification.type)
                        ? `alert alert-${notification.type}`
                        : `alert alert-info`
    
    return notification.message
    ? (
    <div className={classes}>
        {notification.message}
        {showConfirmation
        ? <Confirmation 
            accept = {this.accept}
            decline = {this.decline} 
            />
        : null
        }
    </div>
    ) 
    : null
}
}
Notification.propTypes = {
notification: PropTypes.shape({
    message: PropTypes.string,
    type: PropTypes.oneOf(['success', 'message', 'caution', 'error'])
})
}
Notification.defaultProps = {
notification: {
    type: '',
    message: null,
    accept: ()=>{},
    decline: ()=>{}
}
}

function Confirmation ({ accept, decline }) {
    
    return (
    <>
        <div onClick={ accept } className="btn btn-primary">OK</div>
        <div onClick={ decline } className="btn btn-danger">Cancel</div>
    </>
    )
}
// Confirmation.propTypes = {
// accept: PropTypes.func,
// decline: PropTypes.func
// }
// Confirmation.defaultProps = {
// accept: ()=>{},
// decline: ()=>{}
// }

function App() {
return (
    <div id="app2">
    <Notification { ...template } />
    </div>
);
}

ReactDOM.render(
<App />,
document.querySelector('#root')
)  

