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
    border: '1px solid',
    boxSizing: 'border-box',
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
  'radius=small': {
    borderRadius: '12px',
  },
  'radius=medium': {
    borderRadius: '16px',
  },
  'color=green': {
    borderColor: '#139948',
    color: '#139948',
    '&:hover': {
      backgroundColor: '#139948',
      color: '#FFF',
    },
    '&:active': {
      color: '#666',
    },
  },
  'color=gray400': {
    borderColor: '#BBB',
    color: '#BBB',
    '&:hover': {
      backgroundColor: '#BBB',
      color: '#FFF',
    },
    '&:active': {
      color: '#666',
    },
  },
  'color=gray600': {
    borderColor: 'transparent',
    color: '#BBB',
    '&:hover': {
      borderColor: '#5F5F5F',
    },
    '&:active': {
      borderColor: 'transparent',
      backgroundColor: '#5F5F5F',
    },
  },
  disabled: {
    backgroundColor: '#BBB',
    color: '#BBB',
  },
})

const Ghost = ({
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

export default Ghost
