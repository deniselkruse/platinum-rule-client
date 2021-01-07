import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import doors1 from '../../assets/doors1.jpg';
import doors6 from '../../assets/doors6.jpg';
import doors9 from '../../assets/doors9.jpg';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Row className="platinum">
          <br />
          <br />
          <br />
          <h1 className="welcome">WELCOME TO</h1>
          <h1 className="welcome">THE PLATINUM RULE</h1>
          <br />
          <h2>A helpful place for neighbors.</h2>
          <br />
        </Row>
        <Row className="dustyBlue">
          <br />
          <br />
        </Row>
        {/* <Container>
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={doors6} className="d-block w-100" alt="..."></img>
              </div>
              <div className="carousel-item">
                <img src={doors1} className="d-block w-100" alt="..."></img>
              </div>
              <div className="carousel-item">
                <img src={doors9} className="d-block w-100" alt="..."></img>
              </div>
            </div>
          </div>
        </Container> */}
        <Row className="dustyBlue">
          <br />
          <br />
        </Row>

      </div>
    );
  }
}

export default Home;