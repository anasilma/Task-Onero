import React, { Component } from 'react';
import './FacilitiesStyles.css'

class AppFacilities extends Component {
    render() {
        return (
            <section id="Content-Tiga">
            <div className="container wow fadeInUp">
            <div className="row">
            <div className="col-lg-8 content-left">
                <img height="768px" src="https://res.cloudinary.com/lycoris/image/upload/v1556306837/asset/9_2x_jtmdqz.png" alt="" />
            </div>
            <div className="col-lg-4 text-lg-left title">
                <h5>Enjoy The Facilities</h5>
                <ul className="list-fasilitas">
                    <li>Airpot Shuttle</li>
                    <li>
                        <img height="16px" src="https://res.cloudinary.com/lycoris/image/upload/v1556313125/asset/Ellipse_1_2x_b1vaen.png" alt="" />
                        <h6>Swiming Pool</h6>
                    </li>
                    <li>Fitness Center</li>
                    <li>Spot Bar</li>
                    <li>Karaoke Room</li>
                    <li>Spa</li>
                </ul>
            </div>
            </div>
            </div>
        </section>
        );
    }
}

export default AppFacilities;