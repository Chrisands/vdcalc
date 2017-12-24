import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Input } from 'semantic-ui-react'

class Form extends Component {
  static propTypes = {
    onCostValueChange: PropTypes.func.isRequired,
    onAmountValueChange: PropTypes.func.isRequired,
    entries: PropTypes.arrayOf(PropTypes.object).isRequired,
    getKey: PropTypes.func.isRequired
  }

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
      <Table.Row onFocus={this.handleClick} key={item.key}>
        <Table.Cell collapsing>
          <Input
            type="number"
            size="small"
            id={item.key}
            value={item.cost}
            onChange={this.onCostChange}
          />
        </Table.Cell>
        <Table.Cell collapsing>
          <Input
            type="number"
            size="small"
            style={{ width: 60 }}
            id={item.key}
            value={item.amount}
            onChange={this.onAmountChange}
          />
        </Table.Cell>
        <Table.Cell>{item.product}</Table.Cell>
      </Table.Row>
    )
  }

  render() {
    const formEntries = this.props.entries
    const listItems = formEntries.map(this.createForm)

    return (
      <Table unstackable basic="very">
        <Table.Body>{listItems}</Table.Body>
      </Table>
    )
  }
}

export default Form
