import React, { Component } from "react";
import { Form, FormGroup, Input, Button } from 'reactstrap';

type LoginAcceptedProps = {
  email: string;
  password: string;
  sessionToken: any;
  setEmail: (e: any) => any;
  setPassword: (e: any) => any;
}

class Login extends React.Component<LoginAcceptedProps, {}> {
  constructor(props: LoginAcceptedProps) {
    super(props)
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    fetch(`/user/login`, {
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
        // if (data.sessionToken)
          // this.props.updateToken(data.sessionToken);
      })
  }

  render() {
    return (
      <div>
        <h4 className="loginHeader">Login</h4>
        <Form className="login" onSubmit={this.handleSubmit}>
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
          <Button type="submit">Login</Button>
        </Form>
      </div>
    );
  }
}

export default Login;