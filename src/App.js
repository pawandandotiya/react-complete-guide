import React {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import { useState } from 'react';
const app=()=> {
    useState(
      {
        persons:[
        {name:'Pawan', age:22},
        {name:'Aman', age:18},
        {name:'Rudra', age:2},
       ]
      }
    
    );
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
};

export default app; 