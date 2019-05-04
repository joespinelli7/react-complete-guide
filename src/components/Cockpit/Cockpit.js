import React, { useEffect } from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {
  // used for implementing lifecycle hooks (componentDidMount, etc.)
  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    // Http request...
  })

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPeople) {
    btnClass = classes.Red;
  }

  if (props.people.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.people.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}
      >
        Toggle People
      </button>
    </div>
  )
}

export default cockpit
