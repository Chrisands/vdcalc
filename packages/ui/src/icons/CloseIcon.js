/* eslint-disable max-len */
import React from 'react'
import Icon from './Icon'

const CloseIcon = ({ width, height }) => (
  <Icon
    width={width}
    height={height}
    viewBox='0 0 10 10'
  >
    <path
      fill='#666'
      fillRule='evenodd'
      d='M0 4.323 4.272 4.323 4.272 0 5.722 0 5.722 4.323 10 4.323 10 5.705 5.722 5.705 5.722 10 4.272 10 4.272 5.705 0 5.705 Z'
      transform='rotate(45 5 5)'
    />
  </Icon>
)

export default CloseIcon
