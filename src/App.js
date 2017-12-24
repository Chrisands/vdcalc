import React, { Component } from 'react'
import Form from './Form'
import Statictic from './Stat'
import { Button, Divider, Container } from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1,
      currentKey: 1,
      form: [{ cost: '', amount: '1', product: 0, key: 1 }]
    }

    this.handleItemAdd = this.handleItemAdd.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    this.handleCostChange = this.handleCostChange.bind(this)
    this.handleAmountChange = this.handleAmountChange.bind(this)
    this.currentKey = this.currentKey.bind(this)
  }

  currentKey(e) {
    this.setState({ currentKey: +e })
  }

  handleCostChange(e) {
    const { form, currentKey } = this.state
    const nextForm = form.map((f) => {
      if (f.key !== currentKey) {
        return f
      }
      return {
        ...f,
        cost: e
      }
    })

    this.setState({ form: nextForm })
  }

  handleAmountChange(e) {
    const { form, currentKey } = this.state
    const nextForm = form.map((f) => {
      if (f.key !== currentKey) {
        return f
      }
      return {
        ...f,
        amount: e
      }
    })

    this.setState({ form: nextForm })
  }

  handleItemAdd(e) {
    const counter = this.state.count + 1
    const itemForm = this.state.form

    if (this.state.count < 25) {
      itemForm.push({ cost: '', amount: '1', product: 0, key: counter })
      this.setState({ count: counter })
    }
  }

  handleItemDelete(e) {
    const counter = this.state.count - 1
    const itemForm = this.state.form

    if (this.state.count > 1) {
      itemForm.pop()
      this.setState({ count: counter, currentKey: 1 })
    }
  }

  componentDidUpdate(nextProps, nextState) {
    // updates product when something changes
    const { form, currentKey } = this.state
    const newProduct = form[currentKey - 1].cost * form[currentKey - 1].amount
    const nextForm = form.map((f) => {
      if (f.key !== currentKey) {
        return f
      }
      return {
        ...f,
        product: newProduct
      }
    })

    if (newProduct !== form[currentKey - 1].product) {
      this.setState({ form: nextForm })
    }
  }

  render() {
    return (
      <div>
        <Statictic formArray={this.state.form} formState={this.state} />
        <Divider />
        <Container>
          <Form
            entries={this.state.form}
            getKey={this.currentKey}
            onCostValueChange={this.handleCostChange}
            onAmountValueChange={this.handleAmountChange}
          />
          <Button.Group fluid>
            <Button basic icon="add" onClick={this.handleItemAdd} />
            <Button basic icon="minus" onClick={this.handleItemDelete} />
          </Button.Group>
        </Container>
      </div>
    )
  }
}

export default App
