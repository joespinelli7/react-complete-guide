import React from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends React.Component {
  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef();
  }

  // static means it can be accessed from outside without the need to instantiate an object based on this class first
  // this contextType gives access to this.context so you don't have to use <AuthContext.Consumer>
  // this can only be used in class based components
  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  // line 30, acting as <AuthContext.Consumer> but we now have access to this.context in the whole
  //component b/c of line 16, static contextType = AuthContext;

  render () {
    console.log('[Person.js] rendering...')
    return (
      <Aux>
        {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in!</p>}
        <p key='i1' onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old:)</p>
        <p key='i2'>{this.props.children}</p>
        <input
          key='i3'
          // ref={(inputEl) => {this.inputElement = inputEl}}, (this is older version)
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    )
  }
}

// line 16, ref is a special keyword (can be used on any element). Can be used as function to
// to declare a new property to your class (ex. this.inputElementRef here)

// propTypes should be JS object and propTypes is a special property that React will watch out for in
// development mode and give a warning if you pass incorrect props. Makes sure you're correctly passing
// desired prop type such as string, integer, function(func), etc.
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
