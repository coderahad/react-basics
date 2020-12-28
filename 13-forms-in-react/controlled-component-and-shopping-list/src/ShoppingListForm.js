import React, { Component } from "react";

class ShoppingListForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', qty: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addItem(this.state);
    this.setState({ name: '', qty: '' })
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <lable htmlFor='name'>Name:</lable>
        <input name='name' id='name' value={this.state.name} onChange={this.handleChange}/>
        <lable htmlFor='qty'>Quantity:</lable>
        <input name='qty' id='qty' onChange={this.handleChange}/>
        <button>Submit</button>
      </form>
  )}
}
export default ShoppingListForm;
