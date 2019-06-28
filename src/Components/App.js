import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';

import DataUser from './Data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: DataUser
    }
  }

  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }

  // thongBao = () => {
  //   alert("ket noi thanh cong");
  // }
  render() {
    console.log(this.state.data);
    return (
      <div>
        <Header/>
          <div className="searchForm">
            <div className="container">
              <div className="row">
                <Search ketNoi = {() => this.doiTrangThai()} hienThiForm={this.state.hienThiForm}></Search>
                <TableData></TableData>
                <AddUser hienThiForm={this.state.hienThiForm}></AddUser>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
