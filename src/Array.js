import React, { Component } from 'react'
import Form from './Form'

class Array extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1,
      currentKey: '',
      form: [{ cost: '', amount: '1', key: 1 }]
    }

    this.handleItemAdd = this.handleItemAdd.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    this.handleCostChange = this.handleCostChange.bind(this)
    this.handleAmountChange = this.handleAmountChange.bind(this)
    this.currentKey = this.currentKey.bind(this)
  }

  currentKey(e) {
    this.setState({ currentKey: e })
  }

  handleCostChange(e) {
    this.setState(prevState => ({
      prevState,
      form: [
        {
          cost: e,
          amount: prevState.form[this.state.currentKey - 1].amount,
          // product: prevState.form[this.state.currentKey].product,
          key: prevState.form[this.state.currentKey - 1].key
        }
      ]
    }))
  }

  handleAmountChange(e) {
    this.setState(prevState => ({
      form: [this.state.currentKey]
    }))
  }

  handleProductChange() {}

  handleItemAdd(e) {
    const counter = this.state.count + 1
    const itemForm = this.state.form

    if (this.state.count < 25) {
      itemForm.push({ cost: '', amount: '1', key: counter })
      this.setState({ count: counter })
    }
  }

  handleItemDelete(e) {
    const counter = this.state.count - 1
    const itemForm = this.state.form

    if (this.state.count > 1) {
      itemForm.pop()
      this.setState({ count: counter })
    }
  }

  render() {
    // const entries = this.state.form
    // const costValue = this.state.form.cost
    // const amountValue = this.state.form.amount

    return (
      <div>
        <Form
          entries={this.state.form}
          getKey={this.currentKey}
          onCostValueChange={this.handleCostChange}
          onAmountValueChange={this.handleAmountChange}
        />
        <div>
          <button type="button" onClick={this.handleItemAdd}>
            +
          </button>
          <button type="button" onClick={this.handleItemDelete}>
            –
          </button>
        </div>
      </div>
    )
  }
}

export default Array
