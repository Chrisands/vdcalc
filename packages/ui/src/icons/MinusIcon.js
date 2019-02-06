/* eslint-disable max-len */
import React from 'react'
import Icon from './Icon'
import { colors } from './utils'

const MinusIcon = ({ width, height, color = 'gray600' }) => (
  <Icon
    width={width}
    height={height}
    viewBox='0 0 10 10'
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <path fill={colors[color]} d='M-0.0012512207 4.25 -0.0012512207 5.75 9.99874878 5.75 9.99874878 4.25 Z' />
    </g>
  </Icon>
)

export default MinusIcon
