import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import News from '../components/News';
import Home from '../components/Home';
import NewDetail from '../components/NewDetail';
import Contact from '../components/Contact';

class DieuHuongURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/home" component={Home} />
                <Route path="/tin" component={News} />
                <Route path="/tin-chi-tiet" component={NewDetail} />
                <Route path="/lien-he" component={Contact} />
            </div>
        );
    }
}

export default DieuHuongURL;