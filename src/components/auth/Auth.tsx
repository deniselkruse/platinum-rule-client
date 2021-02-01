import React, { Component } from "react";
import { Button, Container, Col, Row } from 'reactstrap';

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
  register: boolean;
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
      register: true,
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
    
          {this.state.register ?
        
              <Login
                email={this.state.email}
                password={this.state.password}
                setEmail={this.state.setEmail}
                setPassword={this.state.setPassword}
                sessionToken={this.state.sessionToken}
                updateToken={this.props.updateToken}
                getToken={this.state.getToken} />
            :
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
                getToken={this.state.getToken} />
            
          }

        <br />
        <Button
          onClick={() => {
            this.setState({
              register: !this.state.register
            })
          }}>{this.state.register ?
            "Need a login? Click here."
            :
            "Already have a login? Click here."}
        </Button>
        <br /> <br />
      </Container>
    );
  }
}

export default Auth;