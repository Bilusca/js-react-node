import React, {Component} from 'react';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './ContestPreview';


class App extends Component {
    state = {
        headerMessage: "Naming Contests",
        contests: []
    }

    componentDidMount() {
        axios.get('/api/contests')
            .then(response => {
                this.setState({
                    contests: response.data.contests
                })
            })
            .catch(console.error)  
    }

    componentWillUnmount() {
        
    }

    render() {
        return(
            <div className="App">
                <Header message={this.state.headerMessage}/>
                <div>
                    {this.state.contests.map(contest => 
                        <ContestPreview key={contest.id} {...contest} />
                    )}
                    
                </div>
            </div>
        )
    }
}

export default App;