import React, { Component } from 'react';

class Content extends Component {
    constructor(props){
        super(props);
    }

    thongbao = () => {
        alert('Thong bao so 1');
    }

    thongbao2 = () => {
        alert('Thong bao so 2');
    }

    thongbao3 = (x) => {
        alert(x);
    }

    render() {
        return (
            <section>
                <div className="col-lg-4">
                <div className="row">
                    <div className="col-lg-5">
                    <div className="p-1">
                        <img className="img-fluid rounded-circle" src={this.props.image} alt />
                    </div>
                    </div>
                    <div className="col-lg-7">
                    <div className="p-1">
                        <h2 className="display-4">{this.props.tieude}</h2>
                        <p>{this.props.text}</p>
                        <div className="row">
                            <div className="btn btn-group">
                                <div className="btn btn-info" onClick={this.thongbao}>Edit</div>
                                <div className="btn btn-warning" onClick={this.thongbao2}>Remove</div>
                                <div className="btn btn-info" onClick={() => this.thongbao3("Say hi")}>Ahihi</div>
                                <div className="btn btn-warning" onClick={this.thongbao3.bind(this,"Say helllo")}>Ahoho</div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default Content;