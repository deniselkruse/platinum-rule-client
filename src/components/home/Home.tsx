import React, { Component } from 'react';
import { Button, Container, Row } from 'reactstrap';

import DoorsImages from '../home/DoorsImages';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Container className="platinum">
          <Row>
            <br />
            <h1 className="welcome">WELCOME TO
          <br></br>
          THE PLATINUM RULE</h1>
            <h2>A helpful place
            <br></br>
            for neighbors.</h2>
            <br />
          </Row>

          <Row className="dustyBlue">
            <br />
            <br />
          </Row>
        </Container>
        <DoorsImages />
        <Row className="dustyBlue">
          <br />
          <br />
        </Row>
        <br />
        <Container>
          <Button href='/user/login'>Login</Button>
          <br />
          <br />
          <Button href='/user/register'>Register</Button>
        </Container>
      </div>
    );
  }
}

export default Home;