import React, { useState } from 'react';
import './App.css';
import Person from "./Person/Person"

//ES6 way
const app = (props) => {

  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'max', age: 28},
      {name: 'manu', age: 3},
      {name: 'micg', age: 54}
    ],
    otherState: 'some other value',

  });

  const [otherState, setOtherState] = useState('some thing');

  const [getShowPersons, setShowPersons] = useState({
    showPersons: false
  });

  console.log(personsState, otherState);

  const swithNameHandler = (newName) => {
    setPersonsState({persons: [
      {name: newName, age: 28},
      {name: 'manu', age: 3},
      {name: 'micg', age: 34}
    ]
  })
  
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pionter'
  }

  const nameChangerHandler = (event) => {
    setPersonsState({persons: [
      {name: 'michal', age: 28},
      {name: event.target.value, age: 3},
      {name: 'micg', age: 34}
    ]
  })
  }

  const trogglePersonsHandler = () => {
      const doesShow = getShowPersons.showPersons;
      setShowPersons({showPersons: !doesShow});
  }


  let persons = null;

  if (getShowPersons.showPersons) {
    persons = (
      <div >
      <Person 
      name={personsState.persons[0].name} 
      age={personsState.persons[0].age}
      click={swithNameHandler.bind(this, 'BIND !')}> MY HOBBIES: RACING1</Person>
      <Person 
      name={personsState.persons[1].name} 
      age={personsState.persons[1].age}
      changed2={nameChangerHandler}></Person>
      <Person 
      name={personsState.persons[2].name} 
      age={personsState.persons[2].age}> 
      MY HOBBIES: RACING</Person>
      </div> 
    );
  }


      return (
        <div className="App">
         <h1>hi!!</h1>
         <p>it works!</p>
         <button style={style} onClick={trogglePersonsHandler}>Show persons</button>
        {persons}
        </div>
      );
      //return React.createElement('div', {className:"App"}, React.createElement('h1',null,'Hi 2 !!!'))
    }
  
export default app;




