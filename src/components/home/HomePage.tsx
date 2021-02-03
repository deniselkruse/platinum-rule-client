import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

import DoorsImages from './DoorsImages';
import Auth from '../auth/Auth';

type HomePageProps = {
  updateToken?: any,
  userId: number;
}

class HomePage extends React.Component<HomePageProps, {}> {

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

        <Auth
          updateToken={this.props.updateToken}
          userId={this.props.userId}
        />

      </div>
    );
  }
}

export default HomePage;