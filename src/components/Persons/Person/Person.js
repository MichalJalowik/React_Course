import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Auxx from '../../../Auxiliary/Auxiliary';
import withClass from '../../../Auxiliary/withClass'
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

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
    constructor(props) {
        super();
        this.inputElementRef = React.createRef();
    }




    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
    }



    render() {
        console.log('[Person.js] rendering...');
        return (
            <Auxx>
                <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated</p> : <p>please log in</p>}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
            </p>
                <p key="i2">{this.props.children}</p>
                <input
                    key="i3"
                    //   ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Auxx>
        );
    }
}

Person.propTypes = {

    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func

};



// const style = {
//     '@media (min-width: 500px)':{
//         width: '250px'
//     }
// }
//     const rnd = Math.random();

//     if(rnd > 0.7){
// throw new Error('dupa')
//     }



export default withClass(Person, classes.Person);



