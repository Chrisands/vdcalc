import { Component } from 'react'
import onClickOutside from 'react-onclickoutside'

class OnOutsideClick extends Component {
  handleClickOutside(event) {
    const { target, onOutsideClick } = this.props

    if (target && target.contains(event.target)) {
      return
    }
    if (onOutsideClick) {
      onOutsideClick(event)
    }
  }

  render() {
    const { children } = this.props

    return children
  }
}

export default onClickOutside(OnOutsideClick)
