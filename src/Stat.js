import React, { Component } from 'react'

class Statictic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orderSum: 0
    }
    this.getOrderSum = this.getOrderSum.bind(this)
  }

  getOrderSum(props) {}

  componentDidUpdate(nextProps) {}

  componentWillReceiveProps(nextProps) {
    const formArray = nextProps.formArray
    const length = nextProps.formState.count
    const orderSum = function(formArray, length) {
      let sum = 0
      for (let i = 0; i < length; i++) {
        sum += formArray[i].product
      }
      return sum
    }

    this.setState({ orderSum: orderSum(formArray, length) })
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.getOrderSum}>
          console
        </button>
        <div>
          <span>Order sum: {this.state.orderSum}</span>
        </div>
      </div>
    )
  }
}

export default Statictic
