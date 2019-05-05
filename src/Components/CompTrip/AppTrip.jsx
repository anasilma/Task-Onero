import React, { Component } from 'react';
import './TripStyle.css'

class AppTrip extends Component {
    render() {
        return (
            <div>
                <section id="facts">
                    <div className="container wow fadeIn">
                        <div class="section-header">
                            <img height="48px" src="https://res.cloudinary.com/lycoris/image/upload/v1556206073/asset/tripadvisor_2x_udmzdx.png" alt="" />
                            <h3 class="section-title">The Right Place to Stay</h3>
                            <p class="section-description">"You won't need to leave the hotel because evrything is there. The food was delicious and there was plenty of choice for breakfast. It was reasonably priced too."</p>
                            <h6>AviatorCole Birmingham, United Kingdom</h6>
                        </div>
                        <div>
                            <img className="icon" height="16px" src="https://res.cloudinary.com/lycoris/image/upload/v1556206734/asset/s5.0-36301-5_2x_qxckaq.png" alt="" />
                        </div>
                        <div>
                            <p className="more-info">Read More Reviews<img height="24px" src="https://res.cloudinary.com/lycoris/image/upload/v1556207344/asset/Group_8_2x_folb7z.png" alt="" /></p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default AppTrip;