import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Su dung props cach 1
function NumberOne(props){
  return (
    <div className="col-6">
      <div className="card">
        <img className="card-img-top" src={props.linkimg} alt=""/>
        <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text">Text</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to ReactJS</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <NumberOne title="Coffee" linkimg="https://product.hstatic.net/1000075078/product/vnese_coffee_large.jpg"></NumberOne>
      <NumberOne title="Smoothie" linkimg="https://product.hstatic.net/1000075078/product/mango_smoothie_large.jpg"></NumberOne>
    </div>
  );
}

export default App;
