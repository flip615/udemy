import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './CharComponent/Char';

class App extends Component {
  state = {
    userInput: ""
  }

  userInputChangeHandler (event) {
    let currentUserInput = this.state.userInput;
    //console.log(currentUserInput);
    currentUserInput = event.target.value;
    this.setState({userInput:currentUserInput})
  }

  deleteCharHandler (index) {
    console.log('Instide delete hander');
    let currentUserInput = [...this.state.userInput];
    currentUserInput.splice(index, 1);
    this.setState({userInput: currentUserInput});
  }

  render() {
    const style = {
      display: 'inline-block',
      padding: '16px',
      textAlign: 'center',
      margin: '16px',
      border: '1px solid black'
      
    };

    let showChar = null;
    let splitInput = [...this.state.userInput];
    if(splitInput){
      showChar = (
        <div >
        {
          splitInput.map((character, index) => {
            //console.log(index);
            return <Char 
              style = {style} 
              charInput = {character}
              key = {index}
              click = {(index) => this.deleteCharHandler(index)}
            />
          })
        }
        </div>
        
      );
    }

    return (
      <div className = "App">
        
        <input  type="text" onChange={(event) => this.userInputChangeHandler(event)}/>
        <Validation userInput = {this.state.userInput.length}></Validation>
        {showChar}
      </div>
    );
  }
}

export default App;
