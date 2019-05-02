// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person'
//
// const app = props => {
//   const [peopleState, setPeopleState] = useState({
//     people: [
//       {name: 'Joe', age: '22'},
//       {name: 'Adam', age: '23'},
//       {name: 'Bartholemew', age: '69'}
//     ]
//   })
//
//   const [otherState, setOtherState] = useState('some other value');
//
//   const switchNameHandler = () => {
//     // console.log('clicked')
//     setPeopleState({
//       people: [
//         {name: 'Joseph', age: '22'},
//         {name: 'Adam', age: '24'},
//         {name: 'Bartholemew', age: '69'}
//       ]
//     })
//   }
//
//   return (
//     <div className="App">
//       <h1>Hi I'm a React App created by a great developer Joe Spinelli!</h1>
//       <p>I love React!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={peopleState.people[0].name} age={peopleState.people[0].age}>My profession: Incredible Front End Developer</Person>
//       <Person name={peopleState.people[1].name} age={peopleState.people[1].age}>My hobbies: saucin'</Person>
//       <Person name={peopleState.people[2].name} age={peopleState.people[2].age}/>
//     </div>
//   );
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React App created by a great developer Joe Spinelli!'))
// }
//
// export default app;

import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/People/Person/Person';

class App extends Component {
  state = {
    people: [
      { id: 'as5', name: 'Joe', age: 22 },
      { id: 'jk4', name: 'Adam', age: 23 },
      { id: 'qc8', name: 'Bartholemew', age: 69 }
    ],
    otherState: 'some other value',
    showPeople: false
  };

  switchNameHandler = (newName, age) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.people[0].name = 'Joseph';
    this.setState({
      people: [
        { name: newName, age: 22 },
        { name: 'Adam', age: age },
        { name: 'Bartholemew', age: 69 }
      ]
    })
  }

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.people.findIndex( person => {
      return person.id === id;
    });

    const updatePerson = {
      ...this.state.people[personIndex]
    }

    updatePerson.name = e.target.value

    const people = [...this.state.people];
    people[personIndex] = updatePerson

    this.setState({
      people: people
    })
  }

  deletePersonHandler = (personIndex) => {
    // const people = this.state.people.slice();
    // ^ do the same thing except w/ spread operator is ES6 (most updated version)
    const people = [...this.state.people];
    people.splice(personIndex, 1);

    this.setState({
      people: people
    })
  }

  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({
      showPeople: !doesShow
    })
  }

  render() {
    let people = null;
    let btnClass = '';

    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map( (person, index)  => {
            return <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    click={() => this.deletePersonHandler(index)}
                    changed={(e) => this.nameChangedHandler(e, person.id)}
                  />
          })}
        </div>
      )
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.people.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.people.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePeopleHandler}
        >
          Toggle People
        </button>
        {people}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
