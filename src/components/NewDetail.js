import React, { Component } from 'react';
import dl from './dulieu.json';
import NewsRelated from './NewsRelated.js';
class NewDetail extends Component {
    render() {
        // var x=2;
        // var y=2;
        // y = parseInt(y,20);
        // if(x===y) {
        //     console.log("bang nhau");
        // }
        // console.log(typeof(y));
        // console.log(this.props.match.params.id);
        // console.log(typeof(this.props.match.params.id));
        var dem=1;
        return (
            <div>
                {/* begin menu */}
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="/home">React Router - News</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="/navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="/tin">Tin tức</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="/tin-chi-tiet">Tin chi tiết</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="/lien-he">Contact</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                {/* end menu */}
                <header className="masthead">
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-7 my-auto">
                        <div className="header-content mx-auto">
                            <h1 className="mb-5">Trang chi tiet tin</h1>
                            <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
                        </div>
                        </div>
                        <div className="col-lg-5 my-auto">
                        <div className="device-container">
                            <div className="device-mockup iphone6_plus portrait white">
                            <div className="device">
                                <div className="screen">
                                {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                                <img src="https://blackrockdigital.github.io/startbootstrap-new-age/img/demo-screen-1.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="button">
                                {/* You can hook the "home button" to some JavaScript events or just remove it */}
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
                {/* begin tin tuc */}
                {
                    dl.map((value,key) => {
                        if(value.id === parseInt(this.props.match.params.id,20)) {
                            return (
                                <div className="jumbotron jumbotron-fluid" key={key}>
                                    <div className="container">
                                        <img src={value.anh} className="img-fluid rong100" alt="" />
                                        <h3 className="lead text-center">{value.tieuDe}</h3>
                                        <hr className="my-2" />
                                        {
                                            value.noiDung
                                        }
                                        </div>
                                </div>
                            )
                        } return true;
                    })
                }
                <div className="container">
                    <h4 className="card-title text-center">Tin liên quan</h4>
                    <div className="row">
                    <div className="col-12">
                        <div className="card-deck">
                            {
                                dl.map((value,key) => {
                                    if(value.id !== parseInt(this.props.match.params.id,20)) {
                                        if(dem<=4) {
                                            return (
                                                <NewsRelated key={key}
                                                tinId={value.id}
                                                anh={value.anh}
                                                tieuDe={value.tieuDe}
                                                trichDan={value.trichDan}></NewsRelated>
                                            )
                                        }
                                    } return true;
                               }) 
                            }
                        </div>
                    </div>
                    </div>
                </div>
                {/* end tin tuc */}
            </div>
        );
    }
}

export default NewDetail;