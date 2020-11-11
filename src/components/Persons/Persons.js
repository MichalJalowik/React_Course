import React from'react';
import Person from './Person/Person';


const personss = (props) => (
    props.persons.map((person, index) => {
        return (
          <Person
            click={() => props.clicked(index)}
            name={person.name}
            age={person.age}
            id={person.id}
            key={person.id}
            changed={(e) => {
              return props.changed(e, person.id);
            }}
          />
        );
      })
    );

    export default personss;