import React, { Component } from "react";
import { Form, FormGroup, Input, Button } from 'reactstrap';

type LoginAcceptedProps = {
  email: string;
  password: string;
  setEmail: (e: any) => any;
  setPassword: (e: any) => any;
  sessionToken: any;
  updateToken: any;
  getToken: any;
}

class Login extends React.Component<LoginAcceptedProps, {}> {
  constructor(props: LoginAcceptedProps) {
    super(props)
  }

  // loginToggle = () => {
  //   this.setState(!this.login)
  // }

  updateToken = (newToken: any) => {
    localStorage.setItem('token', newToken);
    this.setState({ sessionToken: newToken });
    console.log(newToken);
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    fetch(`http://localhost:3000/user/${'login' ? 'login' : 'register'}`, {
      method: 'POST',
      body: JSON.stringify({
        user: {
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
          console.log("Login successful.");
        } else {
          console.log("Login failed.");
        }
        return response.json();
      })
      .then((data) => {
        this.updateToken(data.sessionToken);
      })
  }

  render() {
    return (
      <div>
        <h4 className="loginHeader">Login</h4>
        <Form className="login" onSubmit={this.handleSubmit}>
          <FormGroup>
            <div className="input-group mb-3">
              <Input
                className="email"
                name="email"
                placeholder="Email"
                onChange={(e) =>
                  this.props.setEmail(e.target.value)}
                value={this.props.email} />
              {/* <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">@example.com</span>
              </div> */}
            </div>
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
          <Button type="submit">Login</Button>
        </Form>
      </div>
    );
  }
}

export default Login;