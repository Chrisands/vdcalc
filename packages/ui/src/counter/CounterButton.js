import React from 'react'
import { StyleSheet } from 'elementum'
import { Button } from '../button'
import { ArrowIcon } from '../icons'

const styles = StyleSheet.create({
  left: {
    '& svg': {
      paddingRight: '2px',
    },
  },
  right: {
    '& svg': {
      paddingLeft: '2px',
    },
  },
})

const CounterButton = ({
  onClick,
  right,
}) => (
  <div
    className={styles({
      right,
      left: !right,
    })}
  >
    <Button
      color='gray150'
      height='small'
      width='small'
      onClick={onClick}
    >
      <ArrowIcon
        right={right}
      />
    </Button>
  </div>
)

export default CounterButton
