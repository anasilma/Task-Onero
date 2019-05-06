import React, { Component } from "react";
import "./OffersStyles.css";
import { Row, Col } from "react-bootstrap";
import arrow from "../../Assets/img/Symbol2.png";
import news from "../../Assets/img/newsletter.png";

class AppOffers extends Component {
  render() {
    return (
      <section id="offers">
        <Row>
          <Col xs={6}>
            <img height="640px" src={news} alt="" />
            <div className="box">
              <div className="col-lg-8 content-left">
                <form>
                  <label>
                    <h2>Subscribe to Our Newslatter</h2>
                  </label>
                  <input type="text" id="data" />
                  <input type="submit" id="button" value="SUBMIT" />
                </form>
              </div>
            </div>
          </Col>
          <Col className="title" xs={6} md={3}>
            <div className="title-news">
              <h3>News & Offers</h3>
            </div>
            <div className="sub-title">
              <h5>6 HOURS DAY USE DELUXE ROOM</h5>
            </div>
            <p>
              Rates with the same day check-in and check-out. These rates are
              available for 6 hours stays between 10am and 6pm only. Perfect for
              a...
            </p>
          </Col>
          <Col className="title" xs={6} md={3}>
            <div>
              <img
                class="img-right"
                className="title-deskripsi-dua"
                height="24px"
                src={arrow}
                alt=""
              />
            </div>
            <div className="sub-title-dua">
              <h5>6 HOURS DAY USE DELUXE ROOM</h5>
            </div>
            <p>
              Rates with the same day check-in and check-out. These rates are
              available for 6 hours stays between 10am and 6pm only. Perfect for
              a...
            </p>
          </Col>
        </Row>
      </section>
    );
  }
}

export default AppOffers;
