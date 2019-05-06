import React, { Component } from "react";
import "./FooterStyles.css";
import logo from "../../Assets/img/footer.png";
import maps from "../../Assets/img/maps.png";
import facebook from "../../Assets/img/social-1_round-facebook.png";
import instagram from "../../Assets/img/social-1_round-instagram.png";
import twitter from "../../Assets/img/social-1_round-twitter.png";
import logo2 from "../../Assets/img/logo2.png";
import logo3 from "../../Assets/img/Asset1.png";
import line from "../../Assets/img/line.png";
import loc from "../../Assets/img/loc.png";

class AppFooter extends Component {
  render() {
    return (
      <section id="footer-body">
        <img class="img-responsive" className="logo-bg" src={logo} alt="" />
        <div class="container-fluid text-center text-md-left">
          <div class="row">
            <div class="col-md-6 mt-md-0 mt-3">
              <div className="container-footer-first">
                <div className="row">
                  <div className="col-lg-12 content-center">
                    <img  className="maps" src={maps} alt="" />
                  </div>
                  <div className="col-lg-12">
                    <img className="line" src={line} width="362px" alt="" />
                  </div>
                  <div className="col-lg-12">
                    <div className="list-footers">
                      <h6>Home</h6>

                      <h6>About Us</h6>

                      <h6>Career</h6>

                      <h6>FAQ</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 mt-md-0 mt-3">
              <div className="container-footer-second">
                <div className="row">
                  <div className="col-lg-12 content-left">
                    <img
                      className="logo-footer"
                      src={logo3}
                      height="80px"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-12">
                    <img
                      className="logo-footer"
                      src={logo2}
                      height="28px"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-12 text-footer">
                    <h6>DADAP-TANGERANG, INDONESIA</h6>
                    <p>
                      Our 386 well designed rooms will meet your highest
                      expectations and you can be assured that we are the best
                      value for money. Our staff will be happy to meet your all
                      expectation and make sure that you leave well rested.
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
                    <img
                      className="see-location"
                      src={loc}
                      height="24px"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div class="container-fluid text-center text-md-left">
            <div className="copyright">
              <div className="row">
                <div className="col-lg-6 text-lg-left copyright-footer" fluid>
                  &copy; FM7 Resort Hotel {new Date().getFullYear()}. All Right
                  Reserved.
                </div>
                <div className="col-lg-6 sosial-media">
                  <img
                    className="facebook"
                    src={facebook}
                    height="24px"
                    alt=""
                  />
                  <img
                    className="instagram"
                    src={instagram}
                    height="24px"
                    alt=""
                  />
                  <img className="twitter" src={twitter} height="24px" alt="" />
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
