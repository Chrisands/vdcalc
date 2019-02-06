/* eslint-disable max-len */
import React from 'react'
import Icon from './Icon'
import { colors } from './utils'

const PlusIcon = ({ width, height, color = 'gray600' }) => (
  <Icon
    width={width}
    height={height}
    viewBox='0 0 10 10'
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <path fill={colors[color]} d='M0 4.32309664 4.2722919 4.32309664 4.2722919 0 5.72180947 0 5.72180947 4.32309664 10 4.32309664 10 5.70548261 5.72180947 5.70548261 5.72180947 10 4.2722919 10 4.2722919 5.70548261 0 5.70548261 Z' />
    </g>
  </Icon>
)

export default PlusIcon
