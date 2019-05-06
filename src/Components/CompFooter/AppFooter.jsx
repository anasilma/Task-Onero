import React, { Component } from 'react';
import './FooterStyles.css'


class AppFooter extends Component {
    render() {
        return (
            <section id="footer-body">
            <div className="content-footer">
                <img className="logo-bg" src="https://res.cloudinary.com/lycoris/image/upload/v1556396244/asset/Asset_1_2x_xuokup.png" height="572.75px" alt="" />
                <div className="container wow fadeInUp">
                    <div className="row">
                        <div className="col-lg-6 content-left">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 content-center">
                                        <img className="maap" src="https://res.cloudinary.com/lycoris/image/upload/v1556386079/asset/Group_94_2x_obybww.png" height="230px" />
                                    </div>
                                    <div className="col-lg-12">
                                        <img className="line" src="https://res.cloudinary.com/lycoris/image/upload/v1556386524/asset/Line_1_2x_hnov1h.png" width="362px" alt="" />
                                    </div>
                                    <div className="col-lg-12">
                                        <ul className="List-Nav">
                                            <li>
                                                <h6>Home</h6>
                                            </li>
                                            <li>
                                                <h6>About Us</h6>
                                            </li>
                                            <li>
                                                <h6>Career</h6>
                                            </li>
                                            <li>
                                                <h6>FAQ</h6>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 content-right">
                            <div className="container-footer-dua">
                                <div className="row">
                                    <div className="col-lg-12 content-left">
                                        <img className="logo-web" src="https://res.cloudinary.com/lycoris/image/upload/v1556392715/asset/Asset_1_2x_oayhw9.png" height="78.69px" alt="" />
                                    </div>
                                    <div className="col-lg-12">
                                        <img className="logo-web" src="https://res.cloudinary.com/lycoris/image/upload/v1556393439/asset/logo2_2x_ndrufk.png" height="28px" alt="" />
                                    </div>
                                    <div className="col-lg-12 deskripsi-footer">
                                        <h6>DADAP-TANGERANG, INDONESIA</h6>
                                        <p>
                                            Our 386 well designed rooms will meet your highest expectations and you can be assured that we are the best value for money. 
                                            Our staff will be happy to meet your all expectation and make sure that you leave well rested.
                                        </p>
                                    </div>
                                    <div className="col-lg-12 text-bawah">
                                        <div className="row">
                                            <div className="col-lg-6 text-lg-left">
                                                <h6>+62 21 5591 1777</h6>
                                            </div>
                                            <div className="col-lg-6 text-lg-right">
                                                <h6>Take A Virtual Tour</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <img className="see-location" src="https://res.cloudinary.com/lycoris/image/upload/v1556394153/asset/Group_66_2x_ecochl.png" height="24px" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer">
                    <div className="container">
                        <div className="copyright">
                            <div className="row">
                                <div className="col-lg-6 text-lg-left copyright-footer" fluid>
                                &copy; FM7 Resort Hotel {new Date().getFullYear()}. All Right Reserved.
                                </div>
                                <div className="col-lg-6 sosial-media">
                                    <img className="facebook" src="https://res.cloudinary.com/lycoris/image/upload/v1556395762/asset/social-1_round-facebook_2x_ia5rds.png" height="24px" alt="" />
                                    <img className="instagram" src="https://res.cloudinary.com/lycoris/image/upload/v1556395753/asset/social-1_round-instagram_2x_ifvbnq.png" height="24px" alt="" />
                                    <img className="twitter" src="https://res.cloudinary.com/lycoris/image/upload/v1556395748/asset/social-1_round-twitter_2x_revn7l.png" height="24px" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default AppFooter;