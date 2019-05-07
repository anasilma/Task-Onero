import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import "./HeaderStyle.css";
import Glober from "../../Assets/img/glober.png";
import Group from "../../Assets/img/group.png";
import AppNavbar from "./AppNavbar";

class AppHeader extends Component {
  state = {
    slide: 0,
    lastScrollY: 0,
    color: 'transparent'
  };

  listenScrollEvent = e => {
    if (window.scrollY > 500) {
      this.setState({color: 'rebeccapurple'})
    } else {
      this.setState({color: 'transparent'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  componentWillMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      this.setState({ slide: "-40px" });
      
    } else {
      this.setState({ slide: "0px" });
    }
    this.setState({ lastScrollY: currentScrollY });
  };

  render() {
    return (
      <div>
        <header
          id="header"
          style={{
            transform: `translate(0, ${this.state.slide})`,
            transition: "transform 200ms linear",
          backgroundColor: this.state.color
          }}
        >
          <Nav  className="justify-content-end">
            <Nav.Item>
              <Nav.Link>
                <img className="hidden-xs" src={Glober} alt="logo" />
                English
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <img className="hidden-xs" src={Group} alt="logo" />
                Login
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <AppNavbar />
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
