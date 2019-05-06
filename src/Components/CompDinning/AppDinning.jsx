import React, { Component } from "react";
import "./DinningStyles.css";
import { Tab, Tabs, Row, Col } from "react-bootstrap";
import lululala from "../../Assets/img/logo-lulu-lala.png";
import more from "../../Assets/img/Group24.png";

class AppDinning extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: "lulu"
    };
  }
  render() {
    return (
      <section id="tabs" class="project-tab">
        <div className="content-dining">
          <div className="dining-text">
            <div className="body-dining">
              <div class="title-dining">
                <h2>Find a Dining Pleasure</h2>
              </div>
              <Tabs
                id="dining-tabs"
                activeKey={this.state.key}
                onSelect={key => this.setState({ key })}
              >
                <Tab eventKey="lulu" title="Lululala">
                  <p className="tab-dining">
                    For those with a sweet tooth or wanting something delicious
                    and healthy we have our Lululala Artisan Patisserie. You
                    will find here: delightful cakes, Home-made desserts, As
                    well as a range of snacks and sandwiches accompanied by hot
                    or cold drinks.
                  </p>
                </Tab>
                <Tab eventKey="porte" title="The Porte">
                  <p className="tab-dining">
                    For those with a sweet tooth or wanting something delicious
                    and healthy we have our Lululala Artisan Patisserie. You
                    will find here: delightful cakes, Home-made desserts, As
                    well as a range of snacks and sandwiches accompanied by hot
                    or cold drinks.
                  </p>
                </Tab>
                <Tab eventKey="monte" title="Montezuma">
                  <p className="tab-dining">
                    For those with a sweet tooth or wanting something delicious
                    and healthy we have our Lululala Artisan Patisserie. You
                    will find here: delightful cakes, Home-made desserts, As
                    well as a range of snacks and sandwiches accompanied by hot
                    or cold drinks.
                  </p>
                </Tab>
                <Tab eventKey="aj" title="AJ Brandon">
                  <p className="tab-dining">
                    For those with a sweet tooth or wanting something delicious
                    and healthy we have our Lululala Artisan Patisserie. You
                    will find here: delightful cakes, Home-made desserts, As
                    well as a range of snacks and sandwiches accompanied by hot
                    or cold drinks.
                  </p>
                </Tab>
              </Tabs>
            </div>

            <Row className="row-dining">
              <Col>
                <img
                  className="img-dining"
                  src={lululala}
                  height="75px"
                  alt=""
                />
              </Col>
              <Col>
                <p className="see-more">See More</p>
                <img src={more} height="25px" alt="" />
              </Col>
            </Row>
          </div>
        </div>
      </section>
    );
  }
}

export default AppDinning;
