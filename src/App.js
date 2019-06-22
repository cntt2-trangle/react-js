import React, {Component} from 'react';
import './App.css';
import TopMenu from './Component/topmenu/TopMenu.js';
import Header from './Component/header/Header';
import Content from './Component/content/Content';
import Footer from './Component/footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <TopMenu></TopMenu>
        <Header></Header>
        <Content tieude="Cach su dung props bang class" vitri1="order-lg-2" image ="img/01.jpg"></Content>
        <Content tieude="Tin so 2" image ="img/02.jpg"></Content>
        <Content tieude="Tin so 3" image ="img/03.jpg"></Content>
        <Footer></Footer>
      </div>
    );
  }
}


export default App;
