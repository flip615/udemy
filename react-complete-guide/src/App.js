import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Gian', age: 28},
      {name: 'Chinee', age: 29},
      {name: 'Manu', age: 28}
    ],
    otherState: 'some other Value',
    showPersons:false
  };

  switchNameHandler = (newName) => {
    // this.state.persons[0].name = "GianFranco";
    this.setState({
      persons: [
        {name: 'GianFranco', age: 29},
        {name: 'Maricris', age: 30},
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
  };

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  };

  render() {
    const style = {
      backgroudColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons){
      persons=(
        <div >
          {this.state.persons.map(person => {
             return <Person name={person.name} age={person.age}/>
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
          
           
        
      </div>
    );
  }
}

export default App;

// <Person 
//   name={this.state.persons[0].name} 
//   age={this.state.persons[0].age}/>
// <Person 
//   name={this.state.persons[1].name} 
//   age={this.state.persons[1].age}
//   changed={this.nameChangeHandler}
//   click={this.switchNameHandler.bind(this, "Chaninay")}>My hobies are: Racing</Person>
// <Person 
//   name={this.state.persons[2].name} 
//   age={this.state.persons[2].age}/>