import React, { Component } from 'react';
import './App.css';
import Validation from "./Validation/Validation.js";
import CharComponent from "./CharComponent/CharComponent.js";

class App extends Component {
  state = {
    inputText: "test"
    
  }

  inputTextHandler = (event) => {
    const newText = {...this.state.inputText};
    newText.inputText = event.target.value;
    this.setState({inputText: newText.inputText});
  }

  deleteTextHandler = (index) => {
    const deletechar = [...this.state.inputText];
    deletechar.splice(index,1);
    const finalText = deletechar.join("");
    this.setState({inputText: finalText});
  }
  render() {
    const style = {
      display: "inline-block",
      padding: "16px",
      textAlign: 'center',
      margin: '16px',
      border: '1px solid black',
    };
    let character = null;
    if (this.state.inputText) {
      let text = [...this.state.inputText];
      character = (
        <div>
        {text.map((character,index) => {
          return <CharComponent 
          style={style} 
          char={character} 
          key={index}
          click={() => this.deleteTextHandler(index)}/>
          })
        }
        </div>
      )
    }

    return (
      <div className="App">
        <input onChange={this.inputTextHandler} type="text" value={this.state.inputText}/>
        <p>Number of Characters entered: {this.state.inputText.length}</p>
        <Validation textLength={this.state.inputText.length}></Validation>
        {character}
        
      </div>
    );
  }
}

export default App;
