import React from 'react';
const person=(props)=>{
    return(
        <div>
            <p>I'm {props.name} and my age is {props.age}.{props.children}</p>
            
        </div>
    )
};
export default person;