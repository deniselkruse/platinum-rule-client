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
  isCurrentUser: boolean;
  userId: string;
  fetchHelpPosts: any;
  modal: boolean;
}

class App extends React.Component<{}, AppStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      isCurrentUser: false,
      sessionToken: "",
      userId: "",
      fetchHelpPosts: "",
      modal: false,
    };
    this.getToken = this.getToken.bind(this);
    this.updateToken = this.updateToken.bind(this);
    this.clearToken = this.clearToken.bind(this);
    this.userId = this.userId.bind(this);
    this.currentUser = this.currentUser.bind(this);
  }

  componentDidMount() {
    this.getToken()
    this.userId()
    this.currentUser()
  }

  getToken = () => {
    if (localStorage.getItem('token')) {
      this.setState({ sessionToken: localStorage.getItem('token') });
    } else {
      console.log('Login required.')
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
    console.log('Hello.')
  };

  userId = () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.setState({ userId: userId })
      console.log("userId:", userId)
    }
  }

  currentUser = () => {
    if (this.state.userId === localStorage.getItem('userId')) {
      this.setState({ isCurrentUser: true })
      console.log(this.state.userId)
    } else {
      this.setState({ isCurrentUser: false })
    }
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal })
  }

  render() {
    return (
      <div>

        <Router>
          <Header clearToken={this.clearToken} sessionToken={this.state.sessionToken} />

          <Switch>

            {!this.state.sessionToken ?
              <Route>
                <HomePage updateToken={this.updateToken} />
              </Route>
              :
              <Route path="/menu">
                <Menu 
                sessionToken={this.state.sessionToken}
                  userId={this.state.userId}
                  fetchHelpPosts={this.state.fetchHelpPosts}
                  // isCurrentUser={this.state.isCurrentUser}
                  // currentUser={this.currentUser} 
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
