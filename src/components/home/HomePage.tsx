import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';

import DoorsImages from './DoorsImages';
import Auth from '../auth/Auth';

class HomePage extends React.Component<{ updateToken: any }, {}> {

  render() {
    return (
      <div>

        <Col className="platinum">
          <br />
          <Row id="platinum">
            <h1 className="welcome">WELCOME TO</h1>
          </Row>
          <Row id="platinum">
            <h1 className="welcome">THE PLATINUM RULE</h1>
          </Row>
          <Row id="platinum">
            <h2 className="helpful">A helpful place for neighbors.</h2>
          </Row>
          <br />
        </Col>

        <Row className="dustyBlue">
          <br /><br />
        </Row>

        <DoorsImages />

        <Row className="dustyBlue">
          <br /><br />
        </Row>
        <br />

        <Auth updateToken={this.props.updateToken} />

      </div>
    );
  }
}

export default HomePage;