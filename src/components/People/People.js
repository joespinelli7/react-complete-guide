import React, { PureComponent } from 'react'
import Person from './Person/Person'

// if returning in one line you can write arrow function as such (ES6 notation), const example = () => ( {code here})

// PureComponent is just a normal component that automatically implements shouldComponentUpdate w/ a
// complete props check so that it checks for any changes to any prop in that component
class People extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[People.js] getDerivedStateFromProps')
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('[People.js] componentWillReceiveProps', props)
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[People.js] shouldComponentUpdate')
  //   if (
  //     nextProps.people !== this.props.people ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate() {
    console.log('[People.js] getSnapshotBeforeUpdate')
    return {message: 'Snapshot!'}
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[People.js] componentDidUpdate')
    console.log(snapshot)
  }

  componentWillUnmount() {
    console.log('[People.js] componentWillUnmount')
  }

  render() {
    console.log('[People.js] rendering...')
    return this.props.people.map( (person, index)  => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          changed={(e) => this.props.changed(e, person.id)}
        />
      )
    })
  }
}

export default People;
