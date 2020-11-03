import React, { Component } from 'react';

class AnnoyingForm extends Component {
  handleKeyUp(evt) {
    console.log(evt);
    if(evt.keyCode === 56) {
      alert("********* I Love the * character *********");
    } else {
      alert("Boo");
    }
  }
  render() {
    return (
       <div>
         <h3>Try Typing Here:</h3>
         <textarea  onKeyUp={this.handleKeyUp}/>
       </div>
    );
  }
}

export default AnnoyingForm;