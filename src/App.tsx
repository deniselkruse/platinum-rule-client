import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/home/Header';
import Footer from './components/home/Footer';
import Home from './components/home/Home';
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
    }
  }

  updateToken = (newToken: any) => {
    localStorage.setItem('token', newToken);
    this.setState({ sessionToken: newToken });
    console.log(newToken);
  };

  clearToken = () => {
    localStorage.clear();
    this.setState({ sessionToken: '' });
  };



  render() {
    return (
      <div className="App">
        <div className="verticalCenter">
          <Header clearToken={this.clearToken} />

          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/user">
                <Auth updateToken={this.updateToken} />
              </Route>
              <Route path='/menu'>
                <Menu sessionToken={this.state.sessionToken} />
              </Route>
            </Switch>
          </Router>

          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
