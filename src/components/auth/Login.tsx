import React, { Component } from "react";
import { Form } from 'reactstrap';

type AcceptedProps = {
  firstName: string;
  lastName: string;
  username: string;
  zipCode: number;
  email: string;
  password: string;
  updateToken: any;
  sessionToken: any;
}

class Login extends React.Component<AcceptedProps, {}> {
  constructor(props: AcceptedProps) {
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
      .then((response) => {
        if (response.status === 200) {
          console.log("Login successful.");
        } else {
          console.log("Login failed.");
        }
        return response.json();
      })
      .then((data) => {
        if (data.sessionToken)
          this.props.updateToken(data.sessionToken);
      })
  }


  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>Sign In</h3>
              <div className="d-flex justify-content-end social_icon">
                <span><i className="fab fa-facebook-square"></i></span>
                <span><i className="fab fa-google-plus-square"></i></span>
                <span><i className="fab fa-twitter-square"></i></span>
              </div>
            </div>
            <div className="card-body">
              <Form>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                  </div>
                  <input type="text" className="form-control" placeholder="username">
                  </input>
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                  </div>
                  <input type="password" className="form-control" placeholder="password"></input>
                </div>
                <div className="row align-items-center remember">
                  <input type="checkbox">Remember Me</input>
                </div>
                <div className="form-group">
                  <input type="submit" value="Login" className="btn float-right login_btn"></input>
                </div>
              </Form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account?<a href="#">Sign Up</a>
              </div>
              <div className="d-flex justify-content-center">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;