import React, { Component } from 'react';

class MultipleForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', email: '', password: '' }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  handleEmailChange(evt) {
    this.setState({ email: evt.target.value });
  }
  handlePasswordChange(evt) {
    this.setState({ password: evt.target.value });
  }
  handleChange(evt) {
    this.setState({ username: evt.target.value});
  }
  handleSubmit (evt) {
    evt.preventDefault();
    alert(`You typed: ${this.state.username}`);
    this.setState({ username: '' });
  }
  render() { 
    return ( 
    <div>
      <h1>Form with multiple input</h1>
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.username} onChange={this.handleChange}/>
        <input name='email' value={this.state.email} placeholder='email'  onChange={this.handleEmailChange}/>
        <input name='password' value={this.state.password} placeholder='password'  onChange={this.handlePasswordChange}/>
      </form>
      <button>SUbmit</button>
    </div> 
    );
  }
}
 
export default MultipleForm;