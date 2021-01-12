import React, { Component } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

type RegisterAcceptedProps = {
  firstName: string;
  lastName: string;
  username: string;
  zipCode: number;
  email: string;
  password: string;
  // updateToken: any;
  sessionToken: any;
  setEmail: (e: any) => any;
  setPassword: (e: any) => any;
  setFirstName: (e: any) => any;
  setLastName: (e: any) => any;
  setUsername: (e: any) => any;
  setZipCode: (e: any) => any;
}

class Register extends React.Component<RegisterAcceptedProps, {}> {
  constructor(props: RegisterAcceptedProps) {
    super(props)
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    fetch(`http://localhost:3000/user/login`, {
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
        // this.props.updateToken(data.sessionToken)
      })
  }


  render() {
    return (
      <div>
        <h4 className="registerHeader">Register</h4>
        <Form className="register" onSubmit={this.handleSubmit}>
        <FormGroup>
            <Input className="firstName" placeholder="First Name" onChange={(e) => this.props.setFirstName(e.target.value)} name="firstName" value={this.props.firstName} />
          </FormGroup>
          <FormGroup>
            <Input className="lastName" placeholder="Last Name" onChange={(e) => this.props.setLastName(e.target.value)} name="lastName" value={this.props.lastName} />
          </FormGroup>
          <FormGroup>
            <Input className="username" placeholder="Username" onChange={(e) => this.props.setUsername(e.target.value)} name="username" value={this.props.username} />
          </FormGroup>
          <FormGroup>
            <Input className="zipCode" placeholder="Zip Code" onChange={(e) => this.props.setZipCode(e.target.value)} name="zipCode" value={this.props.zipCode} />
          </FormGroup>
          <FormGroup>
            <div className="input-group mb-3">
              <Input className="email" placeholder="Email" onChange={(e) => this.props.setEmail(e.target.value)} name="email" value={this.props.email} />
              {/* <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">@example.com</span>
              </div> */}
            </div>
          </FormGroup>
          <FormGroup>
            <Input className="password" placeholder="Password" onChange={(e) => this.props.setPassword(e.target.value)} name="password" value={this.props.password} />
          </FormGroup>
          <Button type="submit">Register</Button>
        </Form>
      </div>
    )
  }
}

export default Register;