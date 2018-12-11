import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a href="/auth/google">Sign in with Google</a>
        </header>
      </div>
    );
  }
}

export default App;
