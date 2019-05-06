import React, { Component } from "react";
import "./RoomsStyles.css";
import { Row, Col, Container } from "react-bootstrap";

class AppRooms extends Component {
  render() {
    return (
      <section id="first-section">
        <Container>
          <Row>
            <Col>
              <h2 className="col-satu">Discover Our Rooms</h2>
              <p className="p-satu">See all rooms</p>
            </Col>
            <Col xs={6} md={4}>
              <p className="col-tiga">See Details</p>
              <p className="col-dua">Junior Suit</p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default AppRooms;
