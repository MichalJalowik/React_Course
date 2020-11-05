import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import Person from "./Person/Person"

class App extends Component {

  state = {
    persons: [
      { id: 'dffg', name: 'max', age: 28 },
      { id: 'dfffgs', iname: 'manu', age: 3 },
      { id: 'kokk', name: 'micg', age: 54 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangerHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  trogglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pionter'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age} 
            id={person.id}
            key={person.id}
            changed={(event) => this.nameChangerHandler(event, person.id)}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>hi!!!!</h1>
        <p>it works!</p>
        <button style={style} onClick={this.trogglePersonsHandler}>Show persons</button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className:"App"}, React.createElement('h1',null,'Hi 2 !!!'))
  }
}
export default App;




