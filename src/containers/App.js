import React, { Component } from "react";
import { render } from "react-dom";
import classes from "./App.css";
import Person from "../components/Persons/Person/Person";
// import Radium, { StyleRoot } from "radium";
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons'
import Cockpit from "../components/Cockpit/Cockpit";


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
    

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangerHandler}
          />
        </div>
      );
      
    }


    return (
      <div className={classes.App}>
      <Cockpit
      showPersons={this.state.showPersons}
      persons={this.state.persons}
      clicked={this.trogglePersonsHandler}
      />
        {persons}
      </div>
    );
    //return React.createElement('div', {className:"App"}, React.createElement('h1',null,'Hi 2 !!!'))
  }
}
export default App;
