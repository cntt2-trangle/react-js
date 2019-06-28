import React, { Component } from 'react';

class AddUser extends Component {
    kiemTraTrangThai = () => {
        if(this.props.hienThiForm === true) {
            return (
                <div className="card boder-primary mb-3 mt-2">
                    <div className="card-header">Thêm mới User vào hệ thống</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                        <input type="text" className="form-control" placeholder="Tên User" />
                        </div>
                        <div className="form-group">
                        <input type="text" className="form-control" placeholder="Điện thoại" />
                        </div>
                        <div className="form-group">
                        <select className="custom-select" required>
                            <option value>Chọn quyền mặc định</option>
                            <option value={1}>Admin</option>
                            <option value={2}>Moderator</option>
                            <option value={3}>Normal</option>
                        </select>
                        </div>
                        <div className="btn btn-block btn-primary">Thêm mới</div>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="col-3">
                <div>
                    {/* {this.hienThiNut()} */}
                    {this.kiemTraTrangThai()}
                </div>
            </div>
        );
    }
}

export default AddUser;