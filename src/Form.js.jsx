import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '', amount: '1' }

    this.handleChangeValue = this.handleChangeValue.bind(this)
    this.handleChangeAmount = this.handleChangeAmount.bind(this)
  }

  handleChangeValue(e) {
    // e = event
    this.setState({ value: e.target.value })
  }
  handleChangeAmount(e) {
    this.setState({ amount: e.target.value })
  }

  render() {
    return (
      <form>
        <label>
          <input
            type="number"
            value={this.state.value}
            onChange={this.handleChangeValue}
          />
        </label>
        <label>
          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleChangeAmount}
          />
        </label>
        <label>{this.state.value * this.state.amount}</label>
      </form>
    )
  }
}

export default Form
