import React from 'react'

const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass

// line 6, way to pull out all the props being passed into this functional component into any component being
// wrapped with withClass(ComponentNameHere)
