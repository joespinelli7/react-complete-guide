import React from 'react'
import Person from './Person/Person'

// if returning in one line you can write arrow function as such (ES6 notation), const example = () => ( {code here})
class People extends React.Component {
  static getDerivedStateFromProps(props, state) {
    console.log('[People.js] getDerivedStateFromProps')
    return state;
  }

  // componentWillReceiveProps(props) {
  //   console.log('[People.js] componentWillReceiveProps', props)
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[People.js] shouldComponentUpdate')
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('[People.js] getSnapshotBeforeUpdate')
    return {message: 'Snapshot!'}
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[People.js] componentDidUpdate')
    console.log(snapshot)
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
