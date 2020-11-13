import React, { Component } from 'react';
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

class Person extends Component {

    render() {
        console.log('person.js rendering..')
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>i'm {this.props.name} ! and i am {this.props.age} years old! with ID: "{this.props.id}"</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </div>


        )

    }



    // const style = {
    //     '@media (min-width: 500px)':{
    //         width: '250px'
    //     }
    // }
    //     const rnd = Math.random();

    //     if(rnd > 0.7){
    // throw new Error('dupa')
    //     }


}

export default Person;