import React, { Component } from 'react';

class NewDetail extends Component {
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
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                    <img src="https://kenh14cdn.com/2019/6/25/screen-shot-2019-06-25-at-101726-am-15614332031522123972695.png" className="img-fluid" alt="" />
                    <p className="lead">Jumbo helper text</p>
                    <hr className="my-2" />
                    <p>Chia sẻ này rất nhanh đã giành được sự chú ý của cộng đồng mạng, chủ yếu là vì "visual" của những món ăn quá đẹp mắt, màu sắc hài hoà, và nếu để ý kỹ thì những thực đơn đều có sự kết hợp dinh dưỡng rất đầy đủ. Ngoài ra, lượng "khổng lồ" của các thực đơn cũng khiến người ta phải choáng váng vì không hiểu sao mà chị Ha Nguyen lại có thể nghĩ ra hơn 40 sự kết hợp không cái nào "đụng hàng" cái nào. Vốn việc suy nghĩ ngày mai nấu gì, ngày kia ăn gì để cho chồng, con không bị ngán vẫn luôn là vấn đề muôn thuở của các bà nội trợ, chia sẻ này của chị không thể nghi ngờ là một gợi ý tuyệt vời cho vô số người.</p>
                    <img src="https://kenh14cdn.com/thumb_w/660/2019/6/25/screen-shot-2019-06-25-at-101900-am-15614332031631675019676.png" className="img-fluid" alt="" />
                    <p>Khi hỏi làm thế nào mà chị có thể sáng tạo như thế, Ha Nguyen đã trả lời rất khiêm tốn rằng chị chỉ kết hợp những món mà mình biết cho phong phú, chứ cũng không phải sáng tạo gì. Chị cũng cho hay rằng mình mới bắt đầu làm cơm từ khoảng nửa năm nay, do mới cưới không lâu.
                        Ngoài ra, Ha cũng chia sẻ tip để kết hợp các món ăn rất đơn giản là miễn sao một bữa ăn có đủ 4 yếu tố là cơm, thịt, rau và hoa quả. Hôm nào có canh thì sẽ kết hợp với các món thịt khô, còn không có canh thì làm thịt có ít sốt cho dễ ăn. Chia sẻ tuy đơn giản, nhưng chắc hẳn ai cũng cảm nhận được sự "có tâm" phía sau, có vậy mới tạo ra loạt những hộp cơm chan chứa tình cảm như thế này nhỉ?
                        Hãy cùng chúng mình chiêm ngưỡng một số các món ăn ngon miệng đẹp mắt do chị Ha Nguyen chuẩn bị nhé!</p>
                    </div>
                </div>
                <div className="container">
                    <h4 className="card-title text-center">Tin liên quan</h4>
                    <div className="row">
                    <div className="col-12">
                        <div className="card-deck">
                        <div className="card">
                            <a href="/tin-chi-tiet"><img className="card-img-top" src="http://placehold.it/500x300/" alt="" /></a>
                            <div className="card-body">
                            <h4 className="card-title">Title</h4>
                            <p className="card-text">Text</p>
                            </div>
                        </div>
                        <div className="card">
                            <a href="/tin-chi-tiet"><img className="card-img-top" src="http://placehold.it/500x300/" alt="" /></a>
                            <div className="card-body">
                            <h4 className="card-title">Title</h4>
                            <p className="card-text">Text</p>
                            </div>
                        </div>
                        <div className="card">
                            <a href="/tin-chi-tiet"><img className="card-img-top" src="http://placehold.it/500x300/" alt="" /></a>
                            <div className="card-body">
                            <h4 className="card-title">Title</h4>
                            <p className="card-text">Text</p>
                            </div>
                        </div>
                        <div className="card">
                            <a href="/tin-chi-tiet"><img className="card-img-top" src="http://placehold.it/500x300/" alt="" /></a>
                            <div className="card-body">
                            <h4 className="card-title">Title</h4>
                            <p className="card-text">Text</p>
                            </div>
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

export default NewDetail;