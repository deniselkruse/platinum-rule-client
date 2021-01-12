import React, { Component } from 'react';
import { Container, Form, FormGroup, Input, Button } from 'reactstrap';

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
  updateToken: any;
  sessionToken: any;
}


class Register extends React.Component<RegisterAcceptedProps, {}> {
  constructor(props: RegisterAcceptedProps) {
    super(props)
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
      .then((res) => res.json())
      .then((data) => {
        this.props.updateToken(data.sessionToken)
      })
  }


  render() {
    return (
      <Container>
        <h4 className="registerHeader">Register</h4>
        <Form className="register" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input
              className="firstName"
              name="firstName"
              placeholder="First Name"
              onChange={(e) =>
                this.props.setFirstName(e.target.value)}
              value={this.props.firstName} />
          </FormGroup>
          <FormGroup>
            <Input
              className="lastName"
              name="lastName"
              placeholder="Last Name"
              onChange={(e) => this.props.setLastName(e.target.value)}
              value={this.props.lastName} />
          </FormGroup>
          <FormGroup>
            <Input
              className="username"
              name="username"
              placeholder="Username"
              onChange={(e) =>
                this.props.setUsername(e.target.value)}
              value={this.props.username} />
          </FormGroup>
          <FormGroup>
            <Input
              className="zipCode"
              name="zipCode"
              placeholder="Zip Code"
              onChange={(e) =>
                this.props.setZipCode(e.target.value)}
              value={this.props.zipCode} />
          </FormGroup>
          <FormGroup>
            <Input
              className="email"
              name="email"
              placeholder="Email"
              onChange={(e) =>
                this.props.setEmail(e.target.value)}
              value={this.props.email} />
          </FormGroup>
          <FormGroup>
            <Input
              className="password"
              name="password"
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