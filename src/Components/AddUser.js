import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            permission: ""
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });

        // package to item
        // var item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.permission = this.state.permission;
        //console.log(item);
    }
    
    kiemTraTrangThai = () => {
        if(this.props.hienThiForm === true) {
            return (
                <div className="col">
                    <form>
                        <div className="card boder-primary mb-3 mt-2">
                            <div className="card-header">Thêm mới User vào hệ thống</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                <input type="text" onChange={(event) => this.isChange(event)} name="name" className="form-control" placeholder="Tên User" />
                                </div>
                                <div className="form-group">
                                <input type="text" onChange={(event) => this.isChange(event)} name="tel" className="form-control" placeholder="Điện thoại" />
                                </div>
                                <div className="form-group">
                                <select className="custom-select" onChange={(event) => this.isChange(event)} name="permission" required>
                                    <option value>Chọn quyền mặc định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modrator</option>
                                    <option value={3}>Normal</option>
                                </select>
                                </div>
                                <input type="reset" className="btn btn-block btn-primary" onClick={(name,tel,permission) => this.props.add(this.state.name, this.state.tel, this.state.permission)} value="Thêm mới"></input>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }
    render() {
        //console.log(this.state);
        return (
            <div>
                {/* {this.hienThiNut()} */}
                {this.kiemTraTrangThai()}
            </div>
        );
    }
}

export default AddUser;