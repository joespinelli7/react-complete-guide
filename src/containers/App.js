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
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.ks] constructor bishhh')
  }

  state = {
    people: [
      { id: 'as5', name: 'Joe', age: 22 },
      { id: 'jk4', name: 'Adam', age: 23 },
      { id: 'qc8', name: 'Bartholemew', age: 69 }
    ],
    otherState: 'some other value',
    showPeople: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount')
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

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
    console.log('[App.js] render bish')
    let people = null;

    if (this.state.showPeople) {
      people = (
        <People
          people={this.state.people}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      )
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPeople={this.state.showPeople}
          people={this.state.people}
          clicked={this.togglePeopleHandler}
        />
        {people}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
