import React from 'react';
import { connect } from 'react-redux';

//Components
import Carservice from './Components/Carservice';

class App extends React.Component {
    state = {
        a:1
    }

    fn = () => this.setState( {a: this.state.a+1}, function() {console.log('this.state - ', this.state)} )

    render() {
        return (
            <React.Fragment>
                <input type="text" onClick={this.fn} />
                <Carservice />
            </React.Fragment>
        )
    }
}

export default App;

