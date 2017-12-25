/* eslint-env browser */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Table, Container, Button } from 'semantic-ui-react'

class Statictic extends Component {
  static propTypes = {
    formArray: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      orderSum: 0,
      productSum: 0,
      discount: 10,
      deliveryCost: 300,
      profit: 0,
      currierSum: 0,
      currierFee: 0,
      feeTax: 0
    }

    this.orderSum = this.orderSum.bind(this)
    this.productSum = this.productSum.bind(this)
    this.deliveryCost = this.deliveryCost.bind(this)
    this.deliveryCostChange = this.deliveryCostChange.bind(this)
    this.discount = this.discount.bind(this)
    this.discountChange = this.discountChange.bind(this)
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this)
    this.currierFee = this.currierFee.bind(this)
    this.feeTax = this.feeTax.bind(this)
    this.feeTaxChange = this.feeTaxChange.bind(this)
    this.copyTextToClipboard = this.copyTextToClipboard.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.productSum(nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState !== this.state) {
      return true
    }
    return false
  }


  orderSum() {
    const newOrderSum = +this.state.productSum + +this.state.deliveryCost
    this.setState({ orderSum: newOrderSum })
    this.forceUpdate(this.currierFee)
  }

  currierSum() {
    const discount = (100 - this.state.discount) * 0.01
    const profit = this.state.discount * 0.01
    const { feeTax } = this.state
    this.setState({
      currierSum: this.state.productSum * discount,
      profit: (this.state.productSum * profit) - feeTax
    })
  }

  currierFee() {
    const fee = this.state.orderSum - this.state.currierSum - this.state.profit

    this.setState({ currierFee: fee })
  }

  deliveryCost() {
    return (
      <span>
        <Input
          transparent
          // label={{ basic: true, content: 'Руб' }}
          // labelPosition="right"
          icon="ruble"
          size="small"
          type="number"
          list="deliveryCost"
          value={this.state.deliveryCost}
          onChange={this.deliveryCostChange}
        />
        <datalist id="deliveryCost">
          <option value="200" />
          <option value="250" />
          <option value="300" />
          <option value="350" />
          <option value="500" />
        </datalist>
      </span>
    )
  }

  deliveryCostChange(e) {
    this.setState({ deliveryCost: +e.target.value })
    this.forceUpdateHandler()
  }

  productSum(props) {
    const { formArray } = props
    const length = props.formState.count
    const productSum = () => {
      let sum = 0
      for (let i = 0; i < length; i += 1) {
        sum += formArray[i].product
      }
      return sum
    }

    this.setState({ productSum: productSum(formArray, length) })
    this.forceUpdateHandler()
  }

  discount() {
    return (
      <span>
        <Input
          transparent
          // label={{ basic: true, content: '%' }}
          // labelPosition="right"
          icon="percent"
          size="small"
          type="number"
          list="discount"
          value={this.state.discount}
          onChange={this.discountChange}
        />
        <datalist id="discount">
          <option value="5" />
          <option value="10" />
          <option value="15" />
          <option value="20" />
        </datalist>
      </span>
    )
  }

  discountChange(e) {
    this.setState({ discount: +e.target.value })
  }

  feeTax() {
    return (
      <span>
        <Input
          transparent
          // label={{ basic: true, content: 'Руб' }}
          // labelPosition="right"
          icon="ruble"
          size="small"
          type="number"
          value={this.state.feeTax}
          onChange={this.feeTaxChange}
        />
      </span>
    )
  }

  feeTaxChange(e) {
    this.setState({ feeTax: +e.target.value })
    this.forceUpdateHandler()
  }

  copyTextToClipboard() {
    const textArea = document.createElement('textarea')

    const products = this.props.formArray.map((element) => {
      const item = `${element.cost}*${element.amount}`
      return item
    })
    products[0] = ` - ${products[0]}`
    const line = products.reduce((a, b) => `${a}\n - ${b}`)

    textArea.value = `${line}

${this.state.orderSum} клиент, ${this.state.currierSum} кафе, ${this.state.currierFee} курьеру, ${this.state.profit} доставке`

    document.body.appendChild(textArea)

    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
  }


  forceUpdateHandler() {
    this.forceUpdate(this.orderSum)
    this.forceUpdate(this.currierSum)
  }

  render() {
    return (
      <div>
        <Container>
          <Table unstackable basic="very">
            <Table.Body>
              <Table.Row>
                <Table.Cell collapsing>Сумма заказа:</Table.Cell>
                <Table.Cell collapsing>{this.state.orderSum}</Table.Cell>
                <Table.Cell>
                  <Button icon="copy" basic compact onClick={this.copyTextToClipboard} />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell collapsing>Кафе:</Table.Cell>
                <Table.Cell>{this.state.currierSum}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell collapsing>Гонорар курьера:</Table.Cell>
                <Table.Cell>{this.state.currierFee}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell collapsing>Скидка:</Table.Cell>
                <Table.Cell>{this.discount()}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell collapsing>Стоимость блюд(а):</Table.Cell>
                <Table.Cell>{this.state.productSum}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell collapsing>Стоимость доставки:</Table.Cell>
                <Table.Cell>{this.deliveryCost()}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell collapsing>Прибыль:</Table.Cell>
                <Table.Cell>{this.state.profit}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell collapsing>Доплата курьеру:</Table.Cell>
                <Table.Cell>{this.feeTax()}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Container>
      </div>
    )
  }
}

export default Statictic
