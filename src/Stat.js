import React, { Component } from 'react'

class Statictic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orderSum: 0,
      productSum: 0,
      discount: '',
      deliveryCost: 0
    }

    this.orderSum = this.orderSum.bind(this)
    this.productSum = this.productSum.bind(this)
    this.deliveryCost = this.deliveryCost.bind(this)
    this.discount = this.discount.bind(this)
    this.discountChange = this.discountChange.bind(this)
  }

  orderSum() {}

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
    this.setState({ discount: e.target.value })
  }

  componentWillReceiveProps(nextProps) {
    this.productSum(nextProps)
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.currierSum}>
          console
        </button>
        <ul>
          <li>Order sum: {this.state.orderSum}</li>
          <li>Currier sum: {this.state.currierSum}</li>
          <li>Discount: {this.discount()}</li>
          <li>Product sum: {this.state.productSum}</li>
          <li>Delivery cost: {this.deliveryCost()}</li>
          <li>Profit: </li>
        </ul>
      </div>
    )
  }
}

export default Statictic
