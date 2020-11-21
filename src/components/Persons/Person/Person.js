import React, { Component } from 'react';

import Auxx from '../../../Auxiliary/Auxiliary';
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
        console.log('[Person.js] rendering...');
        return (
          <Auxx>
            <p onClick={this.props.click}>
              I'm {this.props.name} and I am {this.props.age} years old!
            </p>
            <p key="i2">{this.props.children}</p>
            <input
              key="i3"
              type="text"
              onChange={this.props.changed}
              value={this.props.name}
            />
          </Auxx>
        );
      }
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



export default Person;



