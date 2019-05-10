import React from 'react';

// React.createContext({}) initializes an element( obj, str, num, etc.) with default values and you make it
// available where you want in your app.
const authContext = React.createContext({
  authenticated: false,
  login: () => {}
});

export default authContext;
