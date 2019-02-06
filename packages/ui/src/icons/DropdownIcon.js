/* eslint-disable max-len */
import React from 'react'
import Icon from './Icon'
import { colors, rotate } from './utils'

const DropdownIcon = ({ width, height, color = 'gray600', right }) => (
  <Icon
    width={width}
    height={height}
    viewBox='0 0 6 3'
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round' transform={rotate({ right }, 6, 3)}>
      <path stroke={colors[color]} fill={colors[color]} transform='translate(3.000000, 1.500000) rotate(180.000000) translate(-3.000000, -1.500000) ' d='M3 0.5 5.5 2.5 0.5 2.5 Z' />
    </g>
  </Icon>
)

export default DropdownIcon
