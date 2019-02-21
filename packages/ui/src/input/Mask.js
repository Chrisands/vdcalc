import React, { forwardRef } from 'react'
import MaskedInput from 'react-text-mask'

const Mask = forwardRef(({ mask, ...props }, ref) => {
  if (mask) {
    return (
      <MaskedInput
        guide={false}
        ref={ref}
        mask={mask}
        {...props}
      />
    )
  }
  return (
    <input
      ref={ref}
      {...props}
    />
  )
})

export default Mask
