import React, { Component } from 'react';
import './ButtonList.css';

class ButtonList extends Component {
  static defaultProps = {
    colors: ["#e056fd", "#eb4d4b", "#badc58", "#f0932b"]
  };
  constructor(props) {
    super(props);
    this.state = { color: 'cyan' }
  }
  changeColor(newColor) {
    this.setState({ color: newColor });
  }
  render() { 
    return (
      <div className='ButtonList'>
        {this.props.colors.map(c => {
          const colorObj = { backgroundColor: c };
          return <button style={colorObj}>Click Me!</button>
        })}
      </div>
     );
  }
}
 
export default ButtonList;