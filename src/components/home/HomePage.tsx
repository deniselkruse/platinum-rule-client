import React, { Component } from 'react';
import { Button, Container, Row } from 'reactstrap';

import DoorsImages from './DoorsImages';
import Auth from '../auth/Auth';


class HomePage extends React.Component<{ updateToken: any }, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>

        <Container className="platinum">
          <br />
          <h1 className="welcome">
            WELCOME TO
          </h1>
          <h1 className="welcome">
            THE PLATINUM RULE
          </h1>
          <br />
          <h2 className="helpful">
            A helpful place for neighbors.
            </h2>
          <br />
        </Container>

        <Row className="dustyBlue">
          <br /><br />
        </Row>

        <DoorsImages />

        <Row className="dustyBlue">
          <br /><br />
        </Row>
        <br />

        <Container>
          <Button href='/user/login'>Login</Button>
          <br /><br />
          <Button href='/user/register'>Register</Button>
        </Container>

        <Auth updateToken={this.props.updateToken} />

      </div>
    );
  }
}

export default HomePage;