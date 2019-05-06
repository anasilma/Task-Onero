import React, { Component } from "react";
import "./TripStyle.css";
import trip from "../../Assets/img/tripadvisor.png";
import icon1 from "../../Assets/img/icon1.png";
import icon2 from "../../Assets/img/Group24.png";

class AppTrip extends Component {
  render() {
    return (
      <section id="facts">
        <div className="container-satu">
          <img class="img-responsive" src={trip} alt="" />
          <h3 className="title">The Right Place to Stay</h3>
          <p className="description">
            "You won't need to leave the hotel because evrything is there. The
            food was delicious and there was plenty of choice for breakfast. It
            was reasonably priced too."
          </p>
          <h6 className="place">AviatorCole Birmingham, United Kingdom</h6>
        </div>
        <div>
          <img className="icon" height="16px" src={icon1} alt="" />
        </div>
        <div>
          <p className="more-info">
            Read More Reviews
            <img
              height="24px"
              src={icon2}
              alt=""
            />
          </p>
        </div>
      </section>
    );
  }
}

export default AppTrip;
