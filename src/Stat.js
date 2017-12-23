import React, { Component } from 'react'

class Statictic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orderSum: 0,
      productSum: 0,
      discount: 10,
      deliveryCost: 0,
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
  }

  orderSum() {
    const newOrderSum = +this.state.productSum + +this.state.deliveryCost
    this.setState({ orderSum: newOrderSum })
    this.forceUpdate(this.currierFee)
  }

  currierSum() {
    const discount = (100 - this.state.discount) * 0.01
    const profit = this.state.discount * 0.01
    const feeTax = this.state.feeTax
    this.setState({
      currierSum: this.state.productSum * discount,
      profit: this.state.productSum * profit - feeTax
    })
  }

  currierFee() {
    const fee = this.state.orderSum - this.state.currierSum - this.state.profit
    this.setState({ currierFee: fee })
  }

  deliveryCost() {
    return (
      <span>
        <input
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
    const formArray = props.formArray
    const length = props.formState.count
    const productSum = function(formArray, length) {
      let sum = 0
      for (let i = 0; i < length; i++) {
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
        <input
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
        <span>%</span>
      </span>
    )
  }

  discountChange(e) {
    this.setState({ discount: +e.target.value })
  }

  feeTax() {
    return (
      <span>
        <input
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

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState !== this.state) {
      return true
    }
    return false
  }

  componentWillReceiveProps(nextProps) {
    this.productSum(nextProps)
  }

  forceUpdateHandler(nextProps, nextState) {
    this.forceUpdate(this.orderSum)
    this.forceUpdate(this.currierSum)
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <span>Сумма заказа: </span>
            <span>{this.state.orderSum}</span>
          </li>
          <li>
            <span>Кафе: </span>
            <span>{this.state.currierSum}</span>
          </li>
          <li>
            <span>Гонорар курьера: </span>
            <span>{this.state.currierFee}</span>
          </li>
          <li>
            <span>Скидка: </span>
            <span>{this.discount()}</span>
          </li>
          <li>
            <span>Стоимость блюд(а): </span>
            <span>{this.state.productSum}</span>
          </li>
          <li>
            <span>Стоимость доставки: </span>
            <span>{this.deliveryCost()}</span>
          </li>
          <li>
            <span>Прибыль: </span>
            <span>{this.state.profit}</span>
          </li>
          <li>
            <span>Доплата курьеру: </span>
            <span>{this.feeTax()}</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default Statictic
