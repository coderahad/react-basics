import React, { Component } from 'react';

class Rando extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 , color: 'red' };
    this.makeTmer();
  }
  makeTmer() {
    setInterval(()=> {
      let rand = Math.floor(Math.random() * this.props.maxNum);
      this.setState({ num: rand });
    }, 1000)
  }
  render() {
    return(
      <div>
        <h1>{this.state.num}</h1>
      </div>
    )
  }
}

export default Rando;