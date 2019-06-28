import React, { Component } from 'react';

class TableData extends Component {
    render() {
        return (
            <div className="col-9">
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td scope="row">1</td>
                        <td>Lê Văn</td>
                        <td>0989898989</td>
                        <td>Moderator</td>
                        <td>
                        <div className="btn-group">
                            <div className="btn btn-warning sua"><i className="fa fa-edit" />Sửa</div>
                            <div className="btn btn-danger xoa"><i className="fa fa-delete" />Xóa</div>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">1</td>
                        <td>Lê Văn</td>
                        <td>0989898989</td>
                        <td>Moderator</td>
                        <td>
                        <div className="btn-group">
                            <div className="btn btn-warning sua"><i className="fa fa-edit" />Sửa</div>
                            <div className="btn btn-danger xoa"><i className="fa fa-delete" />Xóa</div>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">1</td>
                        <td>Lê Văn</td>
                        <td>0989898989</td>
                        <td>Moderator</td>
                        <td>
                        <div className="btn-group">
                            <div className="btn btn-warning sua"><i className="fa fa-edit" />Sửa</div>
                            <div className="btn btn-danger xoa"><i className="fa fa-delete" />Xóa</div>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">1</td>
                        <td>Lê Văn</td>
                        <td>0989898989</td>
                        <td>Moderator</td>
                        <td>
                        <div className="btn-group">
                            <div className="btn btn-warning sua"><i className="fa fa-edit" />Sửa</div>
                            <div className="btn btn-danger xoa"><i className="fa fa-delete" />Xóa</div>
                        </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;