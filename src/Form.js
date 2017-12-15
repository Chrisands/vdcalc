import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', amount: '1' };

    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
  }

  handleChangeValue(event) {
    this.setState({ value: event.target.value });
    console.log(`Value: ${this.state.value}`);
  }
  handleChangeAmount(event) {
    this.setState({ amount: event.target.value });
    console.log(`Amount: ${this.state.amount}`);
  }

  render() {
    return (
      <form>
        <label>
          <input type="number" value={this.state.value} onChange={this.handleChangeValue} />
        </label>
        <label>
          <input type="number" value={this.state.amount} onChange={this.handleChangeAmount} />
        </label>
        <label>{this.state.value * this.state.amount}</label>
      </form>
    );
  }
}

export default Form;
