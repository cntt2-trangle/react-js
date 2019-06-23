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
        <Content tieude="A" vitri1="order-lg-2" image ="img/01.jpg" text="Title 1"></Content>
        <Content tieude="B" image ="img/02.jpg" text="Title 2"></Content>
        <Content tieude="C" image ="img/03.jpg" text="Title 3"></Content>
        <Content tieude="A" vitri1="order-lg-2" image ="img/01.jpg" text="Title 1"></Content>
        <Content tieude="B" image ="img/02.jpg" text="Title 2"></Content>
        <Content tieude="C" image ="img/03.jpg" text="Title 3"></Content>
        <Content tieude="A" vitri1="order-lg-2" image ="img/01.jpg" text="Title 1"></Content>
        <Content tieude="B" image ="img/02.jpg" text="Title 2"></Content>
        <Content tieude="C" image ="img/03.jpg" text="Title 3"></Content>
        <Footer></Footer>
      </div>
    );
  }
}


export default App;
