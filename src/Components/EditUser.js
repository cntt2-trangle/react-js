import React, { Component } from 'react';

class EditUser extends Component {
    // props.userEditObject
    render() {
        return (
            <div className="col-12">
                <div className="row">
                    <div className="col">
                        <form method="post">
                            <div className="card text-white bg-warning mb-3 mt-2">
                                <div className="card-header text-center">Sửa thông tin User trong hệ thống</div>
                                <div className="card-body text-primary">
                                    <div className="form-group">
                                    <input defaultValue={this.props.userEditObject.name} type="text" name="name" className="form-control" placeholder="Tên User" />
                                    </div>
                                    <div className="form-group">
                                    <input defaultValue={this.props.userEditObject.tel} type="text" name="tel" className="form-control" placeholder="Điện thoại" />
                                    </div>
                                    <div className="form-group">
                                    <select defaultValue={this.props.userEditObject.permission} className="custom-select" name="permission" required>
                                        <option value>Chọn quyền mặc định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Modrator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                    </div>
                                    <input type="reset" className="btn btn-block btn-danger" value="Lưu" onClick={() => this.props.changeEditUserStatus()}></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditUser;