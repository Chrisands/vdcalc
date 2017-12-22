import React, { Component } from 'react'

class Statictic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orderSum: 0,
      discount: 10
    }

    this.getOrderSum = this.getOrderSum.bind(this)
    this.currierSum = this.currierSum.bind(this)
    this.discount = this.discount.bind(this)
    this.discountChange = this.discountChange.bind(this)
  }

  getOrderSum(props) {
    const formArray = props.formArray
    const length = props.formState.count
    const orderSum = function(formArray, length) {
      let sum = 0
      for (let i = 0; i < length; i++) {
        sum += formArray[i].product
      }
      return sum
    }

    this.setState({ orderSum: orderSum(formArray, length) })
  }

  currierSum() {}

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

  orderSumWithoutDC() {}

  deliveryCost() {}

  componentWillReceiveProps(nextProps) {
    this.getOrderSum(nextProps)
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.currierSum}>
          console
        </button>
        <div>
          <div>Order sum: {this.state.orderSum}</div>
          <div>
            Currier sum: {this.state.currierSum}, Discount:{this.discount()}
          </div>
          <div>
            Order sum without delivery cost: {this.state.orderSumWithoutDC},
            Delivery Cost: <input />
            {/* <input type="number" list="deliveryCost" style={{ width: 50 }} />
              <datalist id="deliveryCost">
              <option value="0" />
              <option value="250" />
              <option value="300" />
              <option value="350" />
              <option value="500" />
            </datalist> */}
          </div>
          <div>profit, input checkbox (MO)</div>
        </div>
      </div>
    )
  }
}

export default Statictic
