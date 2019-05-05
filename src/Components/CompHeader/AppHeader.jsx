import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import './HeaderStyle.css';
import Glober from '../../Assets/img/glober.png'
import Group from '../../Assets/img/group.png'
import AppNavbar from "./AppNavbar";

class AppHeader extends Component {
  render() {
    return (
 
      <div>
      <header id="header">
        <Nav className="justify-content-end" >
          <Nav.Item>
            <Nav.Link >
            <img className="hidden-xs" src={Glober} alt="logo"/>
            English
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link >
            <img className="hidden-xs" src={Group} alt="logo"/>
              Login
              </Nav.Link>
          </Nav.Item>
        </Nav>
     
        <AppNavbar/>
        
      </header>
        <section id="hero">
                <div className="hero-container">
                    <h1>Relax Before Your Next Flight</h1>
                </div>
            </section>
      </div>
    );
  }
}

export default AppHeader;
