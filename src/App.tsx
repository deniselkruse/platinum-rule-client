import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/home/Header';
import Footer from './components/home/Footer';
import HomePage from './components/home/HomePage';
import Menu from './components/home/Menu';


type AppStates = {
  sessionToken: any;
  userId: number;
  fetchHelpPosts: any;
  modal: boolean;
}

class App extends React.Component<{}, AppStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      sessionToken: "",
      userId: 0,
      fetchHelpPosts: "",
      modal: false,
    };
    this.getToken = this.getToken.bind(this);
    this.getUser = this.getUser.bind(this);
    this.updateToken = this.updateToken.bind(this);
    this.clearToken = this.clearToken.bind(this);
  }

  componentDidMount() {
    this.getToken();
    this.getUser();
  }

  getToken = () => {
    if (localStorage.getItem('token')) {
      this.setState({ sessionToken: localStorage.getItem('token') });
    } else {
      console.log('Login required.')
    }
  };

  updateToken = (newToken: string, userId: number) => {
    localStorage.setItem('token', newToken);
    this.setState({ sessionToken: newToken, userId : userId });
    localStorage.setItem('id', JSON.stringify(userId))
    console.log(newToken, userId);
  };

  getUser = () => {
    const id = localStorage.getItem('id')
    if (id) {
      this.setState({ userId: parseInt(id) });
    } else {
      console.log(id)
      console.log('Login required.')
    }
  };

  clearToken = () => {
    localStorage.clear();
    this.setState({ sessionToken: '' });
    console.log('User has logged out.')
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal })
  }

  render() {
    return (
      <div>

        <Router>
          <Header 
          clearToken={this.clearToken} 
          sessionToken={this.state.sessionToken} />

          <Switch>

            {!this.state.sessionToken ?
              <Route>
                <HomePage updateToken={this.updateToken}
                userId={this.state.userId} />
              </Route>
              :
              <Route path="/menu">
                <Menu 
                sessionToken={this.state.sessionToken}
                fetchHelpPosts={this.state.fetchHelpPosts}
                userId={this.state.userId}
                  />
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
