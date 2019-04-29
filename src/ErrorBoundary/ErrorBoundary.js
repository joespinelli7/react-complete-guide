import React from 'react'

// only use Error Boundaries when you have some code you know may fail as in code you can't control
// ex. pulling from an outside sourde
class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  //method which receives potential error w/ additional info passed automatically by React.
  //is executed whenever a component wrapped with ErrorBoundary throws an error.
  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error
    })
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary
