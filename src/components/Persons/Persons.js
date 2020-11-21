import React, { PureComponent } from 'react';
import Person from './Person/Person';


class Personss extends PureComponent {
    // static getDerivedStateFromProps(props,state) {
    //     console.log('persons.js get derived state from props')
    //     return state;
    // }

    // componentWillReceiveProps(props){
    //     console.log('perons.js componenrwill rec props', props)
    // }

    // shouldComponentUpdate(nextProps, nextStste){
    //     console.log('Persons.je shouldCompUpds')
    //     if(
    //         nextProps.persons !== this.props.persons || 
    //         nextProps.changed !== this.props.changed || 
    //         nextProps.clicked !== this.props.clicked
    //     ){
    //         return true;
    //     } else {
    //        return false; 
    //     }
        
    // }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('persons.js getSnapshotUpdate');
        return {message: 'snapshot!'};
    }

    componentDidUpdate(prevProps,prevState, snapshot){
        console.log('persons.js compon did upda');
        console.log(snapshot)
    }
    
    componentWillUnmount(){
        console.log('persons.js comp will unmout')
    }


    render() {
        console.log('persons.je rendering..');
        return (
            this.props.persons.map((person, index) => {
                return (
                    <Person
                        click={() => this.props.clicked(index)}
                        name={person.name}
                        age={person.age}
                        id={person.id}
                        key={person.id}
                        changed={(e) => {
                            return this.props.changed(e, person.id);
                        }}
                    />
                );
            })
        )

    }


}

export default Personss;