import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/home/Header';
import Home from './components/home/Home';
import Routers from './components/home/Routers';

type AppStates = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  username: string;
  zipCode: number;
  sessionToken: any;
  setEmail: (e: any) => any;
  setPassword: (e: any) => any;
  setFirstName: (e: any) => any;
  setLastName: (e: any) => any;
  setUsername: (e: any) => any;
  setZipCode: (e: any) => any;
}

type AppProps = {
  updateToken: any;
  getToken: any;
  clearToken: any;
  sessionToken: any;
}

class App extends React.Component<{}, AppStates> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      username: "",
      zipCode: 0,
      sessionToken: "",
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

  getToken = () => {
    if (localStorage.getItem('token')) {
      this.setState({ sessionToken: localStorage.getItem('token') });
    }
  };

  updateToken = (newToken: any) => {
    localStorage.setItem('token', newToken);
    this.setState({ sessionToken: newToken });
    console.log(newToken);
  };

  clearToken = () => {
    localStorage.clear();
    this.setState({ sessionToken: '' });
  };

  // protectedViews = () => {
  //   return (sessionToken === localStorage.getItem('token')) ? <Router><Home sessionToken={this.sessionToken} /></Router>
  //     : <Auth updateToken={this.updateToken} />
  // }

  render() {
    return (
      <div className="App">
        <div className="verticalCenter">
          <Header />
          <Home />
          {/* {this.protectedViews()} */}
          <Routers />
        </div>
      </div>
    );
  }
}

export default App;
