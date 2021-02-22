import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  state={
    persons:[
      {name:'Pawan', age:22},
      {name:'Aman', age:18},
      {name:'Rudra', age:2},
    ]
  }

  switchNameHandler= () => {
    //console.log('Was Clicked');
   // Don't do as:  this.state.persons[0].name='PKD';
   // Do as follows:
   this.setState(
   {
    persons:[
      {name:'PKD', age:22},
      {name:'Aman', age:18},
      {name:'Rudra', age:3},
    ]
   }
   )
  }

  render() {
    return (
      <div className="App">
      <h1> Hi, I'm a React App.</h1>
      <p>This is really working!!</p>
      <button onClick={this.switchNameHandler}>Switch name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} > I like to code.</Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> I like to ride.</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> I like to play.</Person>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null, 'Hi, I am a React App.',))
  }
}

export default App; 