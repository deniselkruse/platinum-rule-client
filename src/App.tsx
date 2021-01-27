import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/home/Header';
import Footer from './components/home/Footer';
import HomePage from './components/home/HomePage';
import Auth from './components/auth/Auth';
import Menu from './components/home/Menu';


type AppStates = {
  sessionToken: any;
}

class App extends React.Component<{}, AppStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      sessionToken: "",
    }
  }

  getToken = () => {
    if (localStorage.getItem('token')) {
      this.setState({ sessionToken: localStorage.getItem('token') });
    } else {
      console.log('Login required.')
    }
  };

  componentDidMount() {
    this.getToken()
  }

  updateToken = (newToken: any) => {
    localStorage.setItem('token', newToken);
    this.setState({ sessionToken: newToken });
    console.log(newToken);
  };

  clearToken = () => {
    localStorage.clear();
    this.setState({ sessionToken: '' });
    console.log('Hello.')
  };


  render() {
    return (
      <div>

        <Router>
          <Header clearToken={this.clearToken} sessionToken={this.state.sessionToken}/>

          <Switch>

            {!this.state.sessionToken ?
              <Route>
                <HomePage updateToken={this.updateToken} />
              </Route>
              :
              <Route>
                <Menu sessionToken={this.state.sessionToken} />
              </Route>
            }

          </Switch>
        </Router>

        <Footer />
      </div>
    );
  }
}

export default App;
