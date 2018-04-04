import React, {Component} from 'react';

import Header from './Header';

class App extends Component {
    state = {
        headerMessage: "Naming Contests",
        test: 42
    }

    componentDidMount() {
        console.log('did mount');
        debugger;
    }

    componentWillUnmount() {
        console.log('will unmount');
        debugger;
    }

    render() {
        return(
            <div className="App">
                <Header message={this.state.headerMessage}/>
                <div>{this.state.test}</div>
            </div>
        )
    }
}

export default App;