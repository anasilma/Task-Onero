import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./HeaderStyle.css";
import Logo from "../../Assets/img/logo2.png";


class AppNavbar extends Component {

  render() {

    return (
      <div>
        <Navbar bg='transparent' expand="lg" variant="dark">
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
              <Nav.Link href="#facts">
                OVERVIEW
              </Nav.Link>
              <Nav.Link href="#first-section">
                ROOMS
              </Nav.Link>
              <Nav.Link href="#first">
                FACILITIES
              </Nav.Link>
              <Nav.Link href="#tabs">
                DINNING
              </Nav.Link>
              <Nav.Link href="#offers">
                OFFERS
              </Nav.Link>
              <Nav.Link href="#meeting">
                MEETING&EVENTS
              </Nav.Link>
            </Nav>
            <Button variant="outline-light">RESERVE</Button>
          </Navbar.Collapse>
        </Navbar>
        
      </div> 
    )
  }
}

export default AppNavbar;
