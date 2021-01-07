import { render } from '@testing-library/react';
import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import {BrowserRouter as Router} from 'react-router-dom';

// import Login from './components/auth/Login';
import Nav from './components/home/Navbar';
import Home from './components/home/Home';


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <div className="verticalCenter">
        <Nav />
        <Home />
        </div>
      </div>
    );
  }
}

export default App;
