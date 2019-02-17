import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    outline: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: '0.2s',
    '&:hover': {
      opacity: '0.9',
    },
    '&:active': {
      opacity: '1',
    },
  },
  'font=montserrat': {
    fontFamily: 'Montserrat, sans-serif',
  },
  'fontWeight=regular': {
    fontWeight: '400',
  },
  'fontSize=medium': {
    fontSize: '14px',
  },
  'fontColor=white': {
    color: '#FFF',
    '&:active': {
      color: '#666',
    },
  },
  'height=small': {
    height: '24px',
  },
  'height=medium': {
    height: '32px',
  },
  'width=fill': {
    width: '100%',
  },
  'width=medium': {
    width: '32px',
  },
  'width=small': {
    width: '24px',
  },
  'radius=small': {
    borderRadius: '12px',
  },
  'radius=medium': {
    borderRadius: '16px',
  },
  'color=green': {
    backgroundColor: '#139948',
  },
  'color=gray400': {
    backgroundColor: '#BBB',
  },
  'color=gray150': {
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: '#E6E6E6',
    },
    '&:active': {
      backgroundColor: '#BDBDBD',
    },
  },
  disabled: {
    backgroundColor: '#BBB',
    color: '#BBB',
  },
})

const Button = ({
  children,
  font = 'montserrat',
  fontWeight = 'regular',
  fontSize = 'medium',
  fontColor = 'white',
  height = 'medium',
  width = 'fill',
  radius = height,
  color = 'green',
  disabled,
  onClick = () => {},
}) => (
  <div
    className={
      styles({
        font,
        fontWeight,
        fontSize,
        fontColor,
        height,
        width,
        radius,
        color,
        disabled,
      })
    }
    onClick={disabled ? null : onClick}
  >
    {children}
  </div>
)

export default Button
