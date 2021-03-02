import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const app=props=> {
    const [personsState,setPersonState]= useState(
      {
        persons:[
        {name:'Pawan', age:22},
        {name:'Aman', age:18},
        {name:'Rudra', age:2}
       ],
       otherState:'some other value'
      }
    );
console.log(personsState);
    const switchNameHandler=()=>{
       setPersonState({
        persons:[
          {name:'PKD', age:21},
          {name:'Aman', age:18},
          {name:'Rudra', age:3}
         ],
         otherState: personsState.otherState
      })
    }
    return (
      <div className="App">
      <h1> Hi, I'm a React App.</h1>
      <p>This is really working!!</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} > I like to code.</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> I like to ride.</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}> I like to play.</Person>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null, 'Hi, I am a React App.',))
};

export default app; 