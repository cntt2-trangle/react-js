import React, { Component } from 'react';

class NewsItem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="col-4">
                <div className="card">
                <a href="/tin-chi/tiet"><img src={this.props.anh} alt="" className="img-fluid" /></a>
                <div className="card-body">
                    <blockquote className="blockquote">
                    <p>{this.props.trichDan}</p>
                    <footer className="card-blockquote"><cite title="Source title">{this.props.tieuDe}</cite></footer>
                    </blockquote>
                </div>
                </div>
                <hr></hr>
            </div>
        );
    }
}

export default NewsItem;