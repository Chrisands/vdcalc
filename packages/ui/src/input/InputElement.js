import React, { forwardRef } from 'react'
import { StyleSheet } from 'elementum'
import Mask from './Mask'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    alignItems: 'center',
    transition: '0.2s',
    outline: 'none',
    width: '100%',

    backgroundColor: 'transparent',
    border: 'none',


    fontFamily: 'Montserrat, sans-serif',
    fontSize: '14px',
    fontWeight: '400',
    color: '#000',
    '&::placeholder': {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '14px',
      fontWeight: '400',
      color: '#BBB',
    },
  },
})

const InputElement = forwardRef(({
  disabled,
  value,
  onChange = () => {},
  readOnly,
  mask,
  ...props
}, ref) => {
  const handleChange = ({ target }) => {
    if (mask === 'number') {
      const number = target.value !== '' ? Number.parseInt(target.value, 10) : 0
      onChange(number)
    } else {
      onChange(target.value)
    }
  }

  return (
    <Mask
      ref={ref}
      className={styles()}
      disabled={disabled}
      readOnly={readOnly}
      value={value}
      onChange={disabled ? null : handleChange}
      mask={typeof mask === 'object' ? mask : undefined}
      {...props}
    />
  )
})

export default InputElement
