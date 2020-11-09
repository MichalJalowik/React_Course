import React from 'react';
import './Person.css';
// import Radium from 'radium';
import styled from 'styled-components';

const StyledDiv = styled.div`

width: 60%;
    margin: 16px auto;
    border: 1px solid #456;
    box-shadow: 0 2px 3px #999;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
            width: '250px'
        }
`;

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)':{
    //         width: '250px'
    //     }
    // }


    return (
       <StyledDiv>
            <p onClick={props.click}>i'm {props.name} ! and i am {props.age} years old! with ID: "{props.id}"</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
       </StyledDiv>
           

    )
}

export default person;