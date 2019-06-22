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

// Cach 2, su dung class de dinh nghia va thao tac voi props
class NumberTwo extends Component {
  render() {
    return (
      <div className="col-6">
        <div className="card">
          <img className="card-img-top" src={this.props.linkimg} alt=""/>
          <div className="card-body">
            <h4 className="card-title">{this.props.title}</h4>
            <p className="card-text">{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
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
      <NumberTwo title="Matcha Tea" linkimg="https://product.hstatic.net/1000075078/product/matcha_macchiato_large.jpg" text="Bột trà xanh Matcha thơm lừng hảo hạng cùng lớp Macchiato béo ngậy là một sự kết hợp tuyệt vời."></NumberTwo>
      <NumberTwo title="Americano" linkimg="https://product.hstatic.net/1000075078/product/americano_large.jpg" text="Americano được pha chế bằng cách thêm nước vào một hoặc hai shot Espresso để pha loãng độ đặc của cà phê, từ đó mang lại hương vị nhẹ nhàng, không gắt mạnh và vẫn thơm nồng nàn."></NumberTwo>
      <NumberTwo title="Mocha đá xay" linkimg="https://product.hstatic.net/1000075078/product/mocha_ice_blended_large.jpg" text="Sự hoà quyện mịn màng giữa vị đắng thanh của cà phê và vị đắng ngọt của chocolate, cùng vị béo của kem tươi và sữa tươi hòa quyện."></NumberTwo>
    </div>
  );
}

export default App;
