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
  'align=center': {
    alignItems: 'center',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  lowercase: {
    textTransform: 'lowercase',
  },
})

const Text = ({
  children,
  font = 'montserrat',
  weight = 'normal',
  size = 'normal',
  color = 'gray600',
  align,
  uppercase,
  lowercase,
}) => (
  <div
    className={styles({
      font,
      weight,
      size,
      color,
      align,
      uppercase,
      lowercase,
    })}
  >
    {children}
  </div>
)

export default Text
