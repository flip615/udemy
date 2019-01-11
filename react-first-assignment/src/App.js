import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {
  state = {
    username: "GianFranco"
  };

  usernameHandler = (event) => {
    this.setState({username: event.target.value});
  };

  render() {
    return (
      <div className="App">
        <UserInput currentName={this.state.username} changed={this.usernameHandler}></UserInput>
        <UserOutput username={this.state.username}></UserOutput>
      </div>
    );
  }
}

export default App;
