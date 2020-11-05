import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import Person from "./Person/Person"

class App extends Component {

  state = {
    persons: [
      { name: 'max', age: 28 },
      { name: 'manu', age: 3 },
      { name: 'micg', age: 54 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  swithNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'manu', age: 3 },
        { name: 'micg', age: 34 }
      ]
    });
  }

  nameChangerHandler = (event) => {
    this.setState({
      persons: [
        { name: 'michal', age: 28 },
        { name: event.target.value, age: 3 },
        { name: 'micg', age: 34 }
      ]
    });
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
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.swithNameHandler.bind(this, 'BIND !')}> MY HOBBIES: RACING1</Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed2={this.nameChangerHandler}></Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}>
            MY HOBBIES: RACING</Person>
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




