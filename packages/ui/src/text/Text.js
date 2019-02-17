import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
  },
  'font=montserrat': {
    fontFamily: 'Montserrat, sans-serif',
  },
  'font=marmelad': {
    fontFamily: 'Marmelad, sans-serif',
  },
  'weight=light': {
    fontWeight: '300',
  },
  'weight=normal': {
    fontWeight: '400',
  },
  'weight=medium': {
    fontWeight: '500',
  },
  'weight=bold': {
    fontWeight: '600',
  },
  'size=large': {
    fontSize: '20px',
  },
  'size=medium': {
    fontSize: '16px',
  },
  'size=normal': {
    fontSize: '14px',
  },
  'color=black': {
    color: '#000',
  },
  'color=white': {
    color: '#FFF',
  },
  'color=gray600': {
    color: '#666',
  },
  'color=gray400': {
    color: '#BBB',
  },
  'color=gray200': {
    color: '#EEE',
  },
  'color=blue200': {
    color: '#293246',
  },
  'align=center': {
    alignItems: 'center',
  },
  'transform=uppercase': {
    textTransform: 'uppercase',
  },
  'transform=lowercase': {
    textTransform: 'lowercase',
  },
  'transform=capitalize': {
    textTransform: 'capitalize',
  },
})

const Text = ({
  children,
  font = 'montserrat',
  weight = 'normal',
  size = 'normal',
  color = 'gray600',
  align,
  transform,
}) => (
  <div
    className={styles({
      font,
      weight,
      size,
      color,
      align,
      transform,
    })}
  >
    {children}
  </div>
)

export default Text
