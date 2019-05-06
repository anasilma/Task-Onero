import React, { Component } from 'react';
import './RoomsStyles.css'

class AppRooms extends Component {
    render() {
        return (
            <section id="call-to-action">
                <div class="container wow fadeIn">
                    <div class="row">
                        <div class="col-lg-9 text-center text-lg-left">
                        <h2 class="cta-title">Discover Our Rooms</h2>
                        <p class="cta-text">Lorem impsum</p>
                        </div>
                        <div class="col-lg-3 cta-btn-container text-center">
                        <a class="cta-btn align-middle">Junior Suite</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AppRooms;