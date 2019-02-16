import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
  },
  'width=fill': {
    width: '100%',
  },
  'color=black': {
    backgroundColor: '#000',
  },
})

const Block = ({
  children,
  color = 'black',
  width = 'fill',
}) => (
  <div
    className={styles({
      color,
      width,
    })}
  >
    {children}
  </div>
)

export default Block
