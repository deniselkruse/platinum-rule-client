import React, { Component } from "react";
import { Form, FormGroup, Input, Button } from 'reactstrap';
import {Redirect} from 'react-router-dom';


type LoginAcceptedProps = {
  email: string;
  password: string;
  setEmail: (e: any) => any;
  setPassword: (e: any) => any;
  sessionToken: any;
  updateToken: any;
  getToken: any;
}

class Login extends React.Component<LoginAcceptedProps, {redirect: null | string}> {
  constructor(props: LoginAcceptedProps) {
    super(props)
    this.state = {
      redirect: null
    }
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    fetch(`http://localhost:3000/user/login`, {
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
        this.props.updateToken(data.sessionToken, data.user.id);
        this.setState({redirect: '/menu'})
      })
  }

  render() {
    if (this.state.redirect){
      return <Redirect to = {this.state.redirect} />
    }
    return (
      <div>
        <h4 className="loginHeader">Login</h4>
        <Form className="login" onSubmit={this.handleSubmit}>
          <FormGroup>
            <div className="input-group mb-3">
              <Input
                className="email"
                placeholder="Email"
                onChange={(e) =>
                  this.props.setEmail(e.target.value)}
                value={this.props.email} />
            </div>
          </FormGroup>
          <FormGroup>
            <Input
              className="password"
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

export default (Login);