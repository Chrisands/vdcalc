import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    this.createForm = this.createForm.bind(this)
    this.onCostChange = this.onCostChange.bind(this)
    this.onAmountChange = this.onAmountChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  onCostChange(e) {
    this.props.onCostValueChange(e.target.value)
  }

  onAmountChange(e) {
    this.props.onAmountValueChange(e.target.value)
  }

  handleClick(e) {
    this.props.getKey(e.target.getAttribute('id'))
  }

  createForm(item) {
    return (
      <li onFocus={this.handleClick} key={item.key}>
        <form>
          <label>
            <input
              type="number"
              id={item.key}
              value={item.cost}
              onChange={this.onCostChange}
            />
          </label>
          <label>
            <input
              type="number"
              id={item.key}
              value={item.amount}
              onChange={this.onAmountChange}
            />
          </label>
          <label>{item.product}</label>
        </form>
      </li>
    )
  }

  render() {
    const formEntries = this.props.entries
    const listItems = formEntries.map(this.createForm)

    return <ul>{listItems}</ul>
  }
}

export default Form
