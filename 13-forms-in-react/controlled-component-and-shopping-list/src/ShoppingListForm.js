import React, { Component } from "react";

class ShoppingListForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', qty: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  render() {
    return (
      <form>
        <lable htmlFor='name'>Name:</lable>
        <input name='name' id='name' value={this.state.name} onChange={this.handleChange}/>
        <lable htmlFor='qty'>Quantity:</lable>
        <input name='qty' id='qty' onChange={this.handleChange}/>
      </form>
  )}
}
export default ShoppingListForm;
