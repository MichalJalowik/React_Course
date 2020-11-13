import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    const classesAssigned = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        classesAssigned.push(classes.red);
    }
    if (props.persons.length <= 1) {
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

export default cockpit;