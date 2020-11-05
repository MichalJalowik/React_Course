import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>i'm {props.name} ! and i am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed2} value={props.name}></input>

        </div>

    )
}

export default person;