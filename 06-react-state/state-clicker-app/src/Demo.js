import React, { Component } from 'react';

class Demo extends Component {
  constructor(props) {
    super();
    console.log(this.props);
  }
  render() {
    return(
      <div>
        <h1>{this.props.animal}</h1>
      </div>
    )
  }
}

export default Demo;