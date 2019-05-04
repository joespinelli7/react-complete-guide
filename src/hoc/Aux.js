// no need for React import b/c we're not using any JSX so we're not implicitly using React.createElement
// import React from 'react'

// children is property that outputs whatever gets entered between the opening and closing tag of the component
// basically an empty wrapper that always takes content in between <Aux></Aux>, see line 10 for ex.
const aux = props => props.children;

export default aux;

// Example:
// class Person extends React.Component {
//   render () {
//     console.log('[Person.js] rendering...')
//     return (
//       <Aux>
//         <p key='i1' onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old:)</p>,
//         <p key='i2'>{this.props.children}</p>,
//         <input key='i3' type="text" onChange={this.props.changed} value={this.props.name}/>
//       </Aux>
//     )
//   }
// };
