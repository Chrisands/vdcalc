import React, { useRef } from 'react'
import { Button } from '../button'
import { ArrowIcon } from '../icons'
import Layer from '../layer/Layer'

const CounterButton = ({
  onClick,
  right,
}) => {
  const ref = useRef(null)

  return (
    <div
      ref={ref}
    >
      <Button
        color='gray150'
        height='small'
        width='small'
        onClick={onClick}
      >
        <Layer
          parent={ref.current}
          topOffset={5}
          leftOffset={right ? 1 : -1}
        >
          <ArrowIcon
            right={right}
          />
        </Layer>
      </Button>
    </div>
  )
}

export default CounterButton
