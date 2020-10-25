import React, { Component } from 'react';
import Die from './Die';
import numberToWords from 'number-to-words';
import './RollDice.css';

class RollDie extends Component {
  static defaultProps = {
    sides : ['one', 'two', 'three', 'four', 'five', 'six']
  }
  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "one", rolling: false};
    this.roll = this.roll.bind(this);
  }
  roll() {
    const rand1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const rand2 = numberToWords.toWords(Math.floor(Math.random() * this.props.sides.length) + 1);
    this.setState({ die1: rand1, die2: rand2, rolling: true });
    setTimeout(()=>{
      this.setState({rolling: false});
    }, 1000)
  }
  render() { 
    return ( 
      <div className='RollDice'>
        <div className='RollDice-container'>
          <Die face={this.state.die1}/>
          <Die face={this.state.die2}/>
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? 'Rolling...': 'Roll Dice!'}
        </button>
      </div>
     );
  }
}
 
export default RollDie;