import React,{ useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('cockpit.js useEffect');
        setTimeout(() => {
            alert('seved data')
        }, 1000);
        return() => {
            // clearTimeout(timer);
            console.log('cockpit.js cleanup work useEffect')
        }
    }, []);

    useEffect(() => {
        console.log('cockpit.js 2nd ise effect' );
        return() => {
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
            <button className={btnClass} onClick={props.clicked}>
                Show persons
        </button>
        </div>
    );
};

export default React.memo(cockpit);