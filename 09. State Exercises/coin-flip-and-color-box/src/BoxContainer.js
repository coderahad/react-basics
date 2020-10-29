import React, { Component } from 'react';
import Box from './Box';
import './BoxContainer.css';

class BoxContainer extends Component {
  static defaultProps = {
    allColors: ["yellow", "blue", "purple", "violet", "#558866", "#856347", "#44aa66", "#ee2286", "#6633bb"],
    numOfBoxes: 20
  }
  render() { 
    const boxes = Array.from({length: this.props.numOfBoxes}).map(() => (
      <Box colors={this.props.allColors}/>
    ))
    return ( 
      <div className="BoxContainer">
        {boxes}
      </div>
     );
  }
}
 
export default BoxContainer;