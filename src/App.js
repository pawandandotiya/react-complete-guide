import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person'
class App extends Component {

  render() {
    return (
      <div className="App">
      <h1> Hi, I'm a React App.</h1>
      <h1>This is really working!!</h1>
      <button>Switch name</button>
      <Person name='Pawan' age='22'> I like to code.</Person>
      <Person name='Aman' age='18'> I like to ride.</Person>
      <Person name='Rudra' age='2'> I like to play.</Person>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null, 'Hi, I am a React App.',))
  }
}

export default App; 