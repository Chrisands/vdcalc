import React, { Component } from 'react'

class Statictic extends Component {
  constructor(props) {
    super(props)

    this.getOrderSum = this.getOrderSum.bind(this)
  }

  getOrderSum(props) {
    const formArray = this.props.formArray
    const length = this.props.formState.count
    function orderSum(formArray, length) {
      let sum = 0
      for (let i = 0; i < length; i++) {
        sum += formArray[i].product
      }
      return sum
      console.log(sum)
    }

    console.log(orderSum(formArray, length))
  }

  render() {
    const formData = this.props.form
    return (
      <div>
        <button type="button" onClick={this.getOrderSum}>
          console
        </button>
      </div>
    )
  }
}

export default Statictic
