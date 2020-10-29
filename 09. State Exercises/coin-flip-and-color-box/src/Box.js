import React, { Component } from 'react';
import {choice} from './helper';
import './Box.css';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = { color: choice(this.props.colors) };
    this.handleClick = this.handleClick.bind(this);
  }
  pickColor() {
    let newcolor;
    do {
      newcolor = choice(this.props.colors);
    } while(newcolor === this.state.color);

    this.setState({ color: newcolor})
  }
  handleClick() {
    this.pickColor();
  }
  render() { 
    return ( 
      <div className='Box' style={{backgroundColor: this.state.color}} onClick={this.handleClick}>

      </div>
     );
  }
}
 
export default Box;