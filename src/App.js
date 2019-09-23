import React from 'react';
import './App.css';
import NewsList from "./NewsList";
import ListContainer from './ListContainer'
import Footer from './Footer'

class App extends React.Component {
    state = {};
    constructor(props, context) {
        super(props, context);
        this.state = {
            props : props
        }
    }

    componentDidMount(){
    }

    render () {
        return (
            <div className="container">
                <ListContainer />
                <Footer />
            </div>
        );
    }
}

export default App;
