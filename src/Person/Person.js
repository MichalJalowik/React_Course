import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>i'm {props.name} ! and i am {props.age} years old! with ID: "{props.id}"</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>

        </div>

    )
}

export default person;