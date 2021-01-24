import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';

import Login from './Login';
import Register from './Register';

type AuthStates = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  username: string;
  zipCode: number;
  setEmail: (e: any) => any;
  setPassword: (e: any) => any;
  setFirstName: (e: any) => any;
  setLastName: (e: any) => any;
  setUsername: (e: any) => any;
  setZipCode: (e: any) => any;
  sessionToken: any;
  updateToken: any;
  getToken: any;
}

class Auth extends React.Component<{ updateToken: any }, AuthStates> {
  constructor(props: any) {
    super(props)
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      username: "",
      zipCode: 0,
      sessionToken: "",
      getToken: "",
      updateToken: "",
      setEmail: (e) => {
        this.setState({
          email: e
        })
      },
      setPassword: (e) => {
        this.setState({
          password: e
        })
      },
      setFirstName: (e) => {
        this.setState({
          firstName: e
        })
      },
      setLastName: (e) => {
        this.setState({
          lastName: e
        })
      },
      setUsername: (e) => {
        this.setState({
          username: e
        })
      },
      setZipCode: (e) => {
        this.setState({
          zipCode: e
        })
      }
    }
  }

  
  render() {
    return (
      <Container className="auth-container">
        <Row>
          <Col md="6">
            <Switch>
              <Route exact path="/user/login">
                <Login
                  email={this.state.email}
                  password={this.state.password}
                  setEmail={this.state.setEmail}
                  setPassword={this.state.setPassword}
                  sessionToken={this.state.sessionToken}
                  updateToken={this.props.updateToken} 
                  getToken={this.state.getToken}/>
              </Route>
              <Route exact path="/user/register">
                <Register
                  firstName={this.state.firstName}
                  lastName={this.state.lastName}
                  email={this.state.email}
                  username={this.state.username}
                  zipCode={this.state.zipCode}
                  password={this.state.password}
                  setEmail={this.state.setEmail}
                  setPassword={this.state.setPassword}
                  setFirstName={this.state.setFirstName}
                  setLastName={this.state.setLastName}
                  setUsername={this.state.setUsername}
                  setZipCode={this.state.setZipCode}
                  sessionToken={this.state.sessionToken}
                  updateToken={this.props.updateToken} 
                  getToken={this.state.getToken}/>
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Auth;