import React from 'react';
import {connect} from 'react-redux';

//Components
import Carservice from './Components/Carservice';

class App extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <Carservice />
            </React.Fragment>
        )
    }
}

export default connect(store=>store)(App);

