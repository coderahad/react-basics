import React, { Component } from 'react';

class BetterNumberItem extends Component {
  
  render() { 
    return ( 
      <li>
        {this.props.value}
        <button onClick={this.props.remove}>X</button>
      </li>
     );
  }
}
 
export default BetterNumberItem;