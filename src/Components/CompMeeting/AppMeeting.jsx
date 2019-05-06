import React, { Component } from 'react';
import './MeetingStyles.css'
import meeting from '../../Assets/img/arrow.png'


class AppMeeting extends Component {
    render() {
        return (
            <div>
            <section id="meeting">
                <div className="content-meeting">
                    <div className="container">
                        <h1>Meeting & Even</h1>
                        <h4>Celebrate in Style</h4>
                        <p>
                        We’re excited to be able to offer a vast array of venues that lend themselves perfectly to a variety of 
                        occasions. A private or corporate party, a community celebration or remembrance, professional 
                        getaway or any other reason to stay or meet at a hotel venue – we’d love you to think of us.
                        Contact us on marketing@fm7hotel.com.
                        </p>
                        <div className='more-text'>
                        <p  className='more-arrow'>See More</p>
                        <img class="img-right" src={meeting} height="24px" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            </div>
        );
    }
}

export default AppMeeting;