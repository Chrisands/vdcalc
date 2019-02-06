import React, { useState, useEffect } from 'react'
import { Layout } from 'flex-layouts'
import { StyleSheet } from 'elementum'
import { Text } from '../text'
import CounterButton from './CounterButton'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    width: '86px',
    height: '32px',
    backgroundColor: 'rgba(238, 238, 238, 0.5)',
    borderRadius: '16px',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
  },
})

const onChangeCounter = (value, onChange, action) => {
  if (action === 'plus' && value >= 0) {
    onChange(value + 1)
  }
  if (action === 'subtract' && value > 0) {
    onChange(value - 1)
  }
}

const Counter = ({
  value = 0,
  onChange = () => {},
}) => {
  const [counter, setCounter] = useState(value)
  useEffect(() => {
    onChange(counter)
  })

  return (
    <div
      className={styles()}
    >
      <Layout basis='24px'>
        <CounterButton
          onClick={() => onChangeCounter(counter, setCounter, 'subtract')}
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
          onClick={() => onChangeCounter(counter, setCounter, 'plus')}
          right
        />
      </Layout>
    </div>
  )
}

export default Counter
