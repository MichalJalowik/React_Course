import React from 'react';
import classes from './Person.css';
// import Radium from 'radium';

// const StyledDiv = styled.div`

// width: 60%;
//     margin: 16px auto;
//     border: 1px solid #456;
//     box-shadow: 0 2px 3px #999;
//     padding: 16px;
//     text-align: center;

//     @media (min-width: 500px) {
//             width: '250px'
//         }
// `;

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)':{
    //         width: '250px'
    //     }
    // }
    const rnd = Math.random();

    if(rnd > 0.7){
throw new Error('dupa')
    }

    return (
       <div className={classes.Person}>
            <p onClick={props.click}>i'm {props.name} ! and i am {props.age} years old! with ID: "{props.id}"</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
       </div>
           

    )
}

export default person;