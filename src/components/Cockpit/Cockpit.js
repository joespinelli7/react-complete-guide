import React, { useEffect, useRef } from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  // useEffect() used for implementing lifecycle hooks (componentDidMount, etc.)
  // can use as many useEffects as you want, for different data
  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    // Http request...
    // setTimeout(() => {
    //   alert('Saved data to cloud!')
    // }, 1000)
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect')
    };
  }, [])
  // takes an argument of [] that makes it only run once but if you input info [people.js] it will
  // only run when that component is used/affected

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect')
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect')
    };
  })

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPeople) {
    btnClass = classes.Red;
  }

  if (props.peopleLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.peopleLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}
      >
        Toggle People
      </button>
    </div>
  )
}

// React.memo is a technique is which React stores a snapshot of the component and will only re-render it
// if any changes made to that specific component otherwise it will send back original snapshot
export default React.memo(cockpit)
