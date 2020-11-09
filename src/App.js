import React, { Component } from "react";
import { render } from "react-dom";
import "./App.css";
import Person from "./Person/Person";
// import Radium, { StyleRoot } from "radium";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: green;
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pionter;

  &:hover {
    background-color: lightgreen;
    color: black;
  }
`;

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
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pionter",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let persons = null;

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

      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "lightred",
        color: "black"
      };
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>hi!!!!also from codesandbox!</h1>
        <p className={classes.join(" ")}>it works!</p>
        <StyledButton onClick={this.trogglePersonsHandler}>
          Show persons
        </StyledButton>
        {persons}
      </div>
    );
    //return React.createElement('div', {className:"App"}, React.createElement('h1',null,'Hi 2 !!!'))
  }
}
export default App;
