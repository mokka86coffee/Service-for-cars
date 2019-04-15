import React from 'react';
import { connect } from 'react-redux';

//Components
import Carservice from './Components/Carservice';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Carservice />
            </React.Fragment>
        )
    }
}

export default App;

