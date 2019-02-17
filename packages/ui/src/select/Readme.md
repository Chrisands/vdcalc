# Селект

### Селект
```jsx harmony
import React, { Component } from 'react'
import ReactSelect from './ReactSelect'

class SelectExample extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      value: '',
      options: [
        {
          value: 'value one',
          label: 'option one'
        },
        {
          value: 'value two',
          label: 'number two',
        },
        {
          value: 'value three',
          label: 'number three',
        },
        {
          value: 'value four',
          label: 'somewhere near five',
        },
        {
          value: 'value five',
          label: 'five!!!',
        },
        {
          value: 'value six',
          label: 'devil six',
        },
        {
          value: 'value seven',
          label: 'seven',
        },
        {
          value: 'value eight',
          label: 'eight dragons',
        },
        {
          value: 'value nine',
          label: 'nine tales',
        },
        {
          value: 'value ten',
          label: 'ben ten',
        },
      ],
    }
  }
  
  onChangeValue = (value) => {
    this.setState({ value })
  }
  

  render() {
    const { value, options } = this.state
  
    return (
      <div style={{ margin: '10px 10px 160px 10px', padding: '10px' }}>
        <ReactSelect
          value={value}
          onChange={this.onChangeValue}
          options={options}
        />
      </div>
    )
  }
}

export default SelectExample
```
