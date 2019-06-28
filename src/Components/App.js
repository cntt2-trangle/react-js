import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';
const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: DataUser,
      searchText:''
    }
  }

  getNewUserData = (name,tel,permission) => {
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    var items = this.state.data;
    items.push(item);
    this.setState({
      data:items
    });
    console.log("ket noi ok");
    console.log(this.state.data);
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText:dl
    });
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
    var ketQua = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1) {
        ketQua.push(item);
      }
    })
    // console.log(ketQua);
    return (
      <div>
        <Header/>
          <div className="searchForm">
            <div className="container">
              <div className="row">
                <Search checkConnectProps={(dl) => this.getTextSearch(dl)}
                ketNoi = {() => this.doiTrangThai()} hienThiForm={this.state.hienThiForm}></Search>
                <TableData dataUserProps={ketQua}></TableData>
                <AddUser add={(name,tel,permission) => {this.getNewUserData(name,tel,permission)}} hienThiForm={this.state.hienThiForm}></AddUser>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
