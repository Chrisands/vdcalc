import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { cost: '', amount: '', product: '' }

    this.createForm = this.createForm.bind(this)

    // this.handleChangeCost = this.handleChangeCost.bind(this)
    // this.handleChangeAmount = this.handleChangeAmount.bind(this)
  }

  // handleChangeCost(e) {
  //   // e = event
  //   this.setState({ cost: e.target.value })
  //   console.log(e.target.value)
  // }

  // handleChangeAmount(e) {
  //   this.setState({
  //     form: {
  //       amount: e.target.value
  //     }
  //   })
  // }

  createForm(item) {
    return (
      <li key={item.key}>
        <form>
          <label>
            <input
              type="number"
              onChange={this.handleChangeCost}
              defaultValue={item.cost}
            />
          </label>
          <label>
            <input
              type="number"
              onChange={console.log(item.amount)}
              defaultValue={item.amount}
            />
          </label>
          <label>{item.amount}</label>
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
