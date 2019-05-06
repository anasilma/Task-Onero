import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./HeaderStyle.css";
import Logo from "../../Assets/img/logo2.png";

class AppNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="tranparant" expand="lg" variant="dark">
          <Navbar.Brand href="#hero">
            <img
              src={Logo}
              width="100%"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#facts" style={{ color: "white" }}>
                OVERVIEW
              </Nav.Link>
              <Nav.Link href="#first-section" style={{ color: "white" }}>
                ROOMS
              </Nav.Link>
              <Nav.Link href="#first" style={{ color: "white" }}>
                FACILITIES
              </Nav.Link>
              <Nav.Link href="#tabs" style={{ color: "white" }}>
                DINNING
              </Nav.Link>
              <Nav.Link href="#offers" style={{ color: "white" }}>
                OFFERS
              </Nav.Link>
              <Nav.Link href="#meeting" style={{ color: "white" }}>
                MEETING&EVENTS
              </Nav.Link>
            </Nav>

            <Button variant="outline-light">RESERVE</Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
