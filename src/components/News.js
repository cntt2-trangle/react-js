import React, { Component } from 'react';

class News extends Component {
    render() {
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
                    <div className="col-4">
                        <div className="card">
                        <a href="chitiet.html"><img src="https://kenh14cdn.com/2019/6/25/screen-shot-2019-06-25-at-101726-am-15614332031522123972695.png" alt="" className="img-fluid" /></a>
                        <div className="card-body">
                            <blockquote className="blockquote">
                            <p>Loạt cơm hộp đẹp mắt, đầy đủ màu sắc và dinh dưỡng mà chị vợ trẻ chia sẻ khiến người người nhà nhà phải ngưỡng mộ.</p>
                            <footer className="card-blockquote"><cite title="Source title">Cơm trưa "vợ nhà người ta" làm đầy ắp tình yêu khiến cư dân mạng trầm trồ vì độ đảm đang</cite></footer>
                            </blockquote>
                        </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                        <a href="chitiet.html"><img src="https://kenh14cdn.com/2019/6/25/screen-shot-2019-06-25-at-101726-am-15614332031522123972695.png" alt="" className="img-fluid" /></a>
                        <div className="card-body">
                            <blockquote className="blockquote">
                            <p>Loạt cơm hộp đẹp mắt, đầy đủ màu sắc và dinh dưỡng mà chị vợ trẻ chia sẻ khiến người người nhà nhà phải ngưỡng mộ.</p>
                            <footer className="card-blockquote"><cite title="Source title">Cơm trưa "vợ nhà người ta" làm đầy ắp tình yêu khiến cư dân mạng trầm trồ vì độ đảm đang</cite></footer>
                            </blockquote>
                        </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                        <a href="chitiet.html"><img src="https://kenh14cdn.com/2019/6/25/screen-shot-2019-06-25-at-101726-am-15614332031522123972695.png" alt="" className="img-fluid" /></a>
                        <div className="card-body">
                            <blockquote className="blockquote">
                            <p>Loạt cơm hộp đẹp mắt, đầy đủ màu sắc và dinh dưỡng mà chị vợ trẻ chia sẻ khiến người người nhà nhà phải ngưỡng mộ.</p>
                            <footer className="card-blockquote"><cite title="Source title">Cơm trưa "vợ nhà người ta" làm đầy ắp tình yêu khiến cư dân mạng trầm trồ vì độ đảm đang</cite></footer>
                            </blockquote>
                        </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                        <a href="chitiet.html"><img src="https://kenh14cdn.com/2019/6/25/screen-shot-2019-06-25-at-101726-am-15614332031522123972695.png" alt="" className="img-fluid" /></a>
                        <div className="card-body">
                            <blockquote className="blockquote">
                            <p>Loạt cơm hộp đẹp mắt, đầy đủ màu sắc và dinh dưỡng mà chị vợ trẻ chia sẻ khiến người người nhà nhà phải ngưỡng mộ.</p>
                            <footer className="card-blockquote"><cite title="Source title">Cơm trưa "vợ nhà người ta" làm đầy ắp tình yêu khiến cư dân mạng trầm trồ vì độ đảm đang</cite></footer>
                            </blockquote>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* end tin tuc */}
            </div>
        );
    }
}

export default News;