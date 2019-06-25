import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import News from '../components/News';
import Home from '../components/Home';

class DieuHuongURL extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/tin" component={News} />
                </div>
            </Router>
        );
    }
}

export default DieuHuongURL;