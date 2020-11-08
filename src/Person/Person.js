import React from 'react';
import './Person.css'
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)':{
            width: '250px'
        }
    }


    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>i'm {props.name} ! and i am {props.age} years old! with ID: "{props.id}"</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>

        </div>

    )
}

export default Radium(person);