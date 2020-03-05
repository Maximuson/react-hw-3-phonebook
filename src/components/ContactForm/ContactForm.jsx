import React, { Component } from 'react';
import uuid from 'uuid';

export default class ContactForm extends Component {
  constructor(props) {
    super();
    this.handleSubmit = props.handleSubmit;
  }
  state = {
    name: '',
    number: '',
  };
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitForm = e => {
    const contact = {
      id: uuid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.handleSubmit(e, contact);
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <h3>Name</h3>
          <input
            onChange={this.handleInput}
            name="name"
            value={name}
            type="text"
          />
        </div>
        <div>
          <h3>Number</h3>
          <input
            onChange={this.handleInput}
            name="number"
            value={number}
            type="text"
          />
        </div>
        <input type="submit" value="Add" />
      </form>
    );
  }
}
