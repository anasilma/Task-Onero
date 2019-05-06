import React, { Component } from 'react';
import './OffersStyles.css'
import { Row, Col, Container } from 'react-bootstrap'

class AppOffers extends Component {
    render() {
        return (
            <section id="offers"> 
           
  <Row>
    <Col xs={6}>
    <img height="640px" src="https://res.cloudinary.com/lycoris/image/upload/v1556378791/asset/newsletter_kwyloq.png" alt="" />
                    <div className="container">
                    <div className="box">
                        <div className="col-lg-8 content-left">
                        <form>
                        <label><h2>Subscribe to Our Newslatter</h2></label>
                        <input type="text" id="data" ></input>
                        <input type="submit" id="button" value="SUBMIT"></input>
                        </form>
                        </div>
                    </div>
                    </div>
    </Col>
    <Col className='title' xs={6} md={3}>
    <div className="title-deskripsi">
                        <h3>News & Offers</h3>
                    </div>
                    <div className="sub-title">
                        <h5>6 HOURS DAY USE DELUXE ROOM</h5>
                    </div>
                    <p>
                    Rates with the same day check-in and check-out. These rates are available for 6 hours stays between 10am and 6pm only. Perfect for a...
                    </p>
    </Col>
    <Col className='title' xs={6} md={3}>
    <div className="title-deskripsi-dua">
                        <h6>All Offers</h6>
                    </div>
                    <div className="sub-title-dua">
                        <h5>6 HOURS DAY USE DELUXE ROOM</h5>
                    </div>
                    <p>
                    Rates with the same day check-in and check-out. These rates are available for 6 hours stays between 10am and 6pm only. Perfect for a...
                    </p>
    </Col>
  </Row>

        </section>
        );
    }
}

export default AppOffers;