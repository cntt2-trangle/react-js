import React, { Component } from 'react';
import NewsItem from './NewsItem';
import dl from './dulieu.json';
class News extends Component {
    render() {
        // var so = [1,3,4,5,6,9];
        // var so2 = so.map((value,key) => value*3);
        // console.log(so2);
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
                            <h1 className="mb-5">Trang danh sach tin</h1>
                            <a href="/download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
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
                <div className="container">
                    <div className="row mt-3">
                        {
                            dl.map((value,key) => {
                                return (
                                    <NewsItem key={key}
                                    tinId={value.id}
                                    anh={value.anh}
                                    tieuDe={value.tieuDe}
                                    trichDan={value.trichDan}></NewsItem>
                                )
                            })
                        }
                    </div>
                </div>
                {/* end tin tuc */}
            </div>
        );
    }
}

export default News;