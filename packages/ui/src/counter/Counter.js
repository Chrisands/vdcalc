import React, { useState } from 'react'
import { Layout } from 'flex-layouts'
import { StyleSheet } from 'elementum'
import { Text } from '../text'
import CounterButton from './CounterButton'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    width: '88px',
    height: '32px',
    backgroundColor: 'rgba(238, 238, 238, 0.5)',
    borderRadius: '16px',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
  },
})

const onChangeCounter = (value, onChange, minValue, action) => {
  if (action === 'plus' && value >= minValue) {
    onChange(value + 1)
  }
  if (action === 'subtract' && value > minValue) {
    onChange(value - 1)
  }
}

const Counter = ({
  value = 0,
  onChange = () => {},
  minValue = 0,
}) => {
  const [counter, setCounter] = useState(value)

  const changeCounter = (newValue) => {
    setCounter(newValue)
    onChange(newValue)
  }

  return (
    <div
      className={styles()}
    >
      <Layout basis='24px'>
        <CounterButton
          onClick={() => onChangeCounter(counter, changeCounter, minValue, 'subtract')}
        />
      </Layout>
      <Layout
        basis='28px'
        justify='center'
      >
        <Text>
          {counter}
        </Text>
      </Layout>
      <Layout basis='24px'>
        <CounterButton
          onClick={() => onChangeCounter(counter, changeCounter, minValue, 'plus')}
          right
        />
      </Layout>
    </div>
  )
}

export default Counter
