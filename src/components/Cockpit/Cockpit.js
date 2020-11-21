import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const toggleBtnRef = useRef(null);


    useEffect(() => {
        console.log('cockpit.js useEffect');
        // setTimeout(() => {
        //     alert('seved data')
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            // clearTimeout(timer);
            console.log('cockpit.js cleanup work useEffect')
        }
    }, []);

    useEffect(() => {
        console.log('cockpit.js 2nd ise effect');
        return () => {
            console.log('cockpit.js cleanup work useEffect')
        }
    });

    const classesAssigned = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLenght <= 2) {
        classesAssigned.push(classes.red);
    }
    if (props.personsLenght <= 1) {
        classesAssigned.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classesAssigned.join(" ")}>it works!</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
                Show persons
        </button>
            <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer>
        </div>
    );
};

export default React.memo(cockpit);