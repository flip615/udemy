import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Gian', age: 28},
      {name: 'Chinee', age: 29},
      {name: 'Manu', age: 28}
    ]
  };

  switchNameHandler = (newName) => {
    // this.state.persons[0].name = "GianFranco";
    this.setState({
      persons: [
        {name: 'GianFranco', age: 29},
        {name: 'Chinee', age: 30},
        {name: newName, age: 29}
      ]
    })
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: "Gian", age: 29},
        {name: event.target.value, age: 39},
        {name: "Manu", age: 28}
      ]
    })
  }

  render() {
    const style = {
      backgroudColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler()}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}
          click={this.switchNameHandler.bind(this, "Chaninay")}>My hobies are: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
        
      </div>
    );
  }
}

export default App;
