import React, { Component } from "react";
import classes from "./App.css";
// import Radium, { StyleRoot } from "radium";
// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons'
import Cockpit from "../components/Cockpit/Cockpit";


class App extends Component {
  constructor(props) {
    super(props);
    console.log('apps.js contructor');
  }



  state = {
    persons: [
      { id: "dffg", name: "max", age: 28 },
      { id: "dfffgs", name: "manu", age: 3 },
      { id: "kokk", name: "micg", age: 54 }
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log('app.js getDervedStateromProps', props)
    return state;
  }

  // componentWillMount() {
  //   console.log('app.js compWillMount')
  // }

  componentDidMount() {
    console.log('app.js mounted..')
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('app.js sgould comp upd')
    return true;
  }

  componentDidUpdate(){
    console.log('app.js  comp did upd')
  }


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
    console.log('app.js render')
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
      <button onClick={() => {this.setState({showCockpit: false})}}>remove cockpit</button>
        { this.state.showCockpit ? <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLenght={this.state.persons.length}
          clicked={this.trogglePersonsHandler}
        /> : null}
        {persons}
      </div>
    );
    //return React.createElement('div', {className:"App"}, React.createElement('h1',null,'Hi 2 !!!'))
  }
}
export default App;
