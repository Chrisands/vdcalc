import React, { forwardRef } from 'react'
import { StyleSheet } from 'elementum'

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
  ...props
}, ref) => (
  <input
    ref={ref}
    className={styles()}
    disabled={disabled}
    readOnly={readOnly}
    value={value}
    onChange={disabled ? null : ({ target }) => onChange(target.value)}
    {...props}
  />
))

export default InputElement
