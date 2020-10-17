import React, { Component } from 'react';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = { color: 'cyan'};
    console.log(this.props);
  }
  render() {
    return(
      <div>
        <h1>{this.props.animal} {this.state.color}</h1>
      </div>
    )
  }
}

export default Demo;