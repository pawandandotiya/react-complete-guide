import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
class App extends Component {

  render() {
    return (
      <div className="App">
      <h1> Hi, I'm a React App.</h1>
      <h1>This is really working!!</h1>
      <Person/>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null, 'Hi, I am a React App.',))
  }
}

export default App; 