import React, { Component } from 'react'
import Form from './Form'

class Array extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 1, form: [{ cost: '', amount: '1', key: 1 }] }

    this.handleItemAdd = this.handleItemAdd.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

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

  handleChange(e) {
    console.log(e.target.value)
  }

  render() {
    return (
      <div>
        <Form entries={this.state.form} onChange={this.handleChange} />
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
