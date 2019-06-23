import React,{ Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai:"khoitao"
    }
  }
  
  
  componentWillMount() {
    console.log('componentWillMount chay roi')
  }
  
  componentDidMount() {
    console.log('componentDidMount da chay')
  }

  render() {
    console.log('Day la ham render da chay');
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
