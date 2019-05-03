import React from 'react'
import Person from './Person/Person'

// if returning in one line you can write arrow function as such (ES6 notation), const example = () => ( {code here})
const people = (props) => {
console.log('[People.js] rendering... bishh')
  return props.people.map( (person, index)  => {
    return (<Person
            key={person.id}
            name={person.name}
            age={person.age}
            click={() => props.clicked(index)}
            changed={(e) => props.changed(e, person.id)}
          />
    )
  });
}

export default people
