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
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] constructor')
  }

  state = {
    people: [
      { id: 'as5', name: 'Joe', age: 22 },
      { id: 'jk4', name: 'Adam', age: 23 },
      { id: 'qc8', name: 'Bartholemew', age: 69 }
    ],
    otherState: 'some other value',
    showPeople: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount')
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate')
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
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

    // when using old State, setState can take 2 arguments, first is previous state and second is current props
    // using prevState to change state guarantees that it will be actual previous state
    // and re-render correctly.
    this.setState((prevState, props) => {
      return {
        people: people,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

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

  loginHandler = () => {
    this.setState({
      authenticated: true
    });
  };

  render() {
    console.log('[App.js] render')
    let people = null;

    if (this.state.showPeople) {
      people = (
        <People
          people={this.state.people}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      )
    }

    // line 172 AuthContext.Provider sets up key-values pairs for AuthContext.Consumer to manipulate
    // in other components that need the info

    return (
      <Aux>
        <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ?
            <Cockpit
              title={this.props.appTitle}
              showPeople={this.state.showPeople}
              peopleLength={this.state.people.length}
              clicked={this.togglePeopleHandler}
            />
            :
            null
          }
          {people}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
