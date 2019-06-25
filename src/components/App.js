import React, { Component } from 'react';
import './../css/App.css';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import News from './News';
import NewDetail from './NewDetail';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        {/* <Home></Home> */}
        {/* <News></News> */}
        {/* <NewDetail></NewDetail> */}
        <Contact></Contact>
        <Footer></Footer>
        
      </div>
    );
  }
}

export default App;
