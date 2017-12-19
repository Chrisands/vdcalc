import React, { Component } from 'react'

// This is more complex example that uses two components -
// a service chooser form, and the individual services inside it.

class ServiceChooser extends Component {
  constructor(props) {
    super(props)
    this.state = { total: 0 }
  }

  addTotal(price) {
    this.setState({ total: this.state.total + price })
  }

  render() {
    const self = this

    const services = this.props.items.map(function(s) {
      // Create a new Service component for each item in the items array.
      // Notice that I pass the self.addTotal function to the component.

      return (
        <Service
          name={s.name}
          price={s.price}
          active={s.active}
          addTotal={self.addTotal}
        />
      )
    })

    return (
      <div>
        {services}

        <p id="total">
          Total <b>${this.state.total.toFixed(2)}</b>
        </p>
      </div>
    )
  }
}

class Service extends Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
  }

  clickHandler() {
    const active = !this.state.active

    this.setState({ active: active })

    // Notify the ServiceChooser, by calling its addTotal method
    this.props.addTotal(active ? this.props.price : -this.props.price)
  }

  render() {
    return (
      <p
        className={this.state.active ? 'active' : ''}
        onClick={this.clickHandler}
      >
        {this.props.name} <b>${this.props.price.toFixed(2)}</b>
      </p>
    )
  }
}

const services = [
  { name: 'Web Development', price: 300 },
  { name: 'Design', price: 400 },
  { name: 'Integration', price: 250 },
  { name: 'Training', price: 220 }
]

// Render the ServiceChooser component, and pass the array of services

{
  /* <ServiceChooser items={services} /> */
}
export default ServiceChooser
