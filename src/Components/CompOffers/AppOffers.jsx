import React, { Component } from 'react';
import './OffersStyles.css'

class AppOffers extends Component {
    render() {
        return (
            <section id="news">
            <div className="container wow fadeInUp">
            <div className="row">
            <div className="col-lg-6 content-left">
                <img height="640px" src="https://res.cloudinary.com/lycoris/image/upload/v1556378791/asset/newsletter_kwyloq.png" alt="" />
                <div className="container">
                <div className="box">
                    <div className="col-lg-8 content-left">
                    {/* <h2>Subscribe to Our Newsletter</h2> */}
                    <form>
                    <label><h2>Subscribe to Our Newslatter</h2></label>
                    <input type="text" id="data" ></input>
                    <input type="submit" id="button" value="SUBMIT"></input>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-3 text-lg-left title">
                <div className="title-deskripsi">
                    <h3>News & Offers</h3>
                </div>
                <div className="sub-title">
                    <h5>6 HOURS DAY USE DELUXE ROOM</h5>
                </div>
                <p>
                Rates with the same day check-in and check-out. These rates are available for 6 hours stays between 10am and 6pm only. Perfect for a...
                </p>
            </div>
            <div className="col-lg-3 text-lg-left title">
                <div className="title-deskripsi-dua">
                    <h6>All Offers</h6>
                </div>
                <div className="sub-title-dua">
                    <h5>6 HOURS DAY USE DELUXE ROOM</h5>
                </div>
                <p>
                Rates with the same day check-in and check-out. These rates are available for 6 hours stays between 10am and 6pm only. Perfect for a...
                </p>
            </div>
            </div>
            </div>
        </section>
        );
    }
}

export default AppOffers;