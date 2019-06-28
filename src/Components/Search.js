import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" placeholder="Nhập từ khóa" style={{width: '500px'}} />
                        <div className="btn btn-info">Tìm</div>
                    </div>
                    <div className="btn-group1">
                        <div className="btn btn-block btn-outline-secondary mt-2" onClick={() => this.props.ketNoi()}>Đóng lại</div>
                        <div className="btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()}>Thêm mới</div>
                    </div>
                </div>
                <hr></hr>
            </div>
        );
    }
}

export default Search;