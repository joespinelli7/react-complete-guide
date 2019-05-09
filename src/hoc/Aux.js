// no need for React import b/c we're not using any JSX so we're not implicitly using React.createElement
// import React from 'react'

// children is property that outputs whatever gets entered between the opening and closing tag of the component
// basically an empty wrapper that always takes content in between <Aux></Aux>, see line 10 for ex.
const aux = props => props.children;

export default aux;

// or you can use built in <React.fragment> to do the same thing as Aux.
// just input it wherever you'd input <Aux> </Aux> (<React.Fragment> </React.Fragment>)
// Example:
// import Aux from './Aux'
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
