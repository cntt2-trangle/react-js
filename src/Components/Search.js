import React, { Component } from 'react';

class Search extends Component {
    hienThiNut = () => {
        if(this.props.hienThiForm === true) {
            return <div className="btn btn-block btn-outline-secondary mt-2" onClick={() => this.props.ketNoi()}>Đóng lại</div>
        } else {
            return <div className="btn btn-block btn-outline-info mt-2" onClick={() => this.props.ketNoi()}>Thêm mới</div>
        }
    }
    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" placeholder="Nhập từ khóa" style={{width: '500px'}} />
                        <div className="btn btn-info">Tìm</div>
                    </div>
                    <div className="btn-group1">
                        {this.hienThiNut()}
                    </div>
                </div>
                <hr></hr>
            </div>
        );
    }
}

export default Search;