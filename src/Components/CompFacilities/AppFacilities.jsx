import React, { Component } from "react";
import "./FacilitiesStyles.css";
import swim from "../../Assets/img/9.jpg";
import ellipse from "../../Assets/img/ellipse.png";
import arrow from "../../Assets/img/Group24.png";

class AppFacilities extends Component {
  render() {
    return (
      <section id="first">
        <div className="row">
          <div class="col-lg-8 content-left">
            <img class="img-fluid" height="400px" src={swim} alt="" />
          </div>
          <div class="col-lg-4 text-lg-left">
            <h5 className="enjoy">Enjoy The Facilities</h5>
            <ul className="fasilitas">
              <li className="list-fasilitas">Airpot Shuttle</li>
              <li className="list-fasilitas">
                <img height="16px" src={ellipse} alt="" />
                <h6 className="swimming">Swiming Pool</h6>
              </li>
              <li className="list-fasilitas">Fitness Center</li>
              <li className="list-fasilitas">Sport Bar</li>
              <li className="list-fasilitas">Karaoke Room</li>
              <li className="list-fasilitas">Spa</li>
            </ul>
            <p className="more">Experience more</p>
            <img height="16px" src={arrow} alt="" />
          </div>
        </div>
      </section>
    );
  }
}

export default AppFacilities;
