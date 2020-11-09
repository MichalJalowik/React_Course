import React, { Component } from "react";
import { render } from "react-dom";
import classes from "./App.css";
import Person from "./Person/Person";
// import Radium, { StyleRoot } from "radium";


class App extends Component {
  state = {
    persons: [
      { id: "dffg", name: "max", age: 28 },
      { id: "dfffgs", name: "manu", age: 3 },
      { id: "kokk", name: "micg", age: 54 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  nameChangerHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  trogglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                id={person.id}
                key={person.id}
                changed={(e) => {
                  return this.nameChangerHandler(e, person.id);
                }}
              />
            );
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    const classesAssigned = [];

    if (this.state.persons.length <= 2) {
      classesAssigned.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      classesAssigned.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>hi!!!!also from codesandbox!</h1>
        <p className={classesAssigned.join(" ")}>it works!</p>
        <button className={btnClass} onClick={this.trogglePersonsHandler}>
          Show persons
        </button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className:"App"}, React.createElement('h1',null,'Hi 2 !!!'))
  }
}
export default App;
