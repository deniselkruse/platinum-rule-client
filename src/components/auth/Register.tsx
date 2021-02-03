import React, { Component } from 'react';
import { Container, Form, FormGroup, Input, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';

type RegisterAcceptedProps = {
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
  sessionToken?: any,
  updateToken: any;
  // isAdmin: boolean;
  // checkAdmin: () => void;
}


class Register extends React.Component<RegisterAcceptedProps, { redirect: null | string }> {
  constructor(props: RegisterAcceptedProps) {
    super(props)
    this.state = {
      redirect: null
    }
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    fetch(`http://localhost:3000/user/register`, {
      method: 'POST',
      body: JSON.stringify({
        user: {
          firstName: this.props.firstName,
          lastName: this.props.lastName,
          username: this.props.username,
          zipCode: this.props.zipCode,
          email: this.props.email,
          password: this.props.password
        }
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Registration successful.");
        } else {
          console.log("Registration failed.");
        }
        return response.json();
      })
      .then((data) => {
        this.props.updateToken(data.sessionToken);
        this.setState({ redirect: '/menu' })
      })
  }

checkToken = () => {
  if (!this.props.sessionToken || this.props.username === undefined) {
    return <Redirect to='/'/>
  } else {
    return <Redirect to="/menu"/>
  }
}


  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <Container>
        <h4 className="registerHeader">Register</h4>
        <Form className="register" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input
              className="firstName"
              placeholder="First Name"
              onChange={(e) =>
                this.props.setFirstName(e.target.value)}
              value={this.props.firstName} />
          </FormGroup>
          <FormGroup>
            <Input
              className="lastName"
              placeholder="Last Name"
              onChange={(e) =>
                this.props.setLastName(e.target.value)}
              value={this.props.lastName} />
          </FormGroup>
          <FormGroup>
            <Input
              className="username"
              placeholder="Username"
              onChange={(e) =>
                this.props.setUsername(e.target.value)}
              value={this.props.username} />
          </FormGroup>
          <FormGroup>
            <Input
              className="zipCode"
              placeholder="Zip Code"
              onChange={(e) =>
                this.props.setZipCode(e.target.value)}
              value={this.props.zipCode} />
          </FormGroup>
          <FormGroup>
            <Input
              className="email"
              placeholder="Email"
              onChange={(e) =>
                this.props.setEmail(e.target.value)}
              value={this.props.email} />
          </FormGroup>
          <FormGroup>
            <Input
              className="password"
              placeholder="Password"
              onChange={(e) =>
                this.props.setPassword(e.target.value)}
              value={this.props.password} />
          </FormGroup>
          <Button type="submit">Register</Button>
        </Form>
      </Container>
    );
  }
}

export default Register;