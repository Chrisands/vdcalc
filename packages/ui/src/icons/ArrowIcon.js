/* eslint-disable max-len */
import React from 'react'
import Icon from './Icon'
import { colors, rotate } from './utils'

const ArrowIcon = ({ width, height, color = 'gray600', right }) => (
  <Icon
    width={width}
    height={height}
    viewBox='0 0 8 14'
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' transform={rotate({ right }, 8, 14)}>
      <g transform='translate(7.000000, 7.000000) rotate(45.000000) translate(-7.000000, -7.000000) translate(2.000000, 2.000000)' fill={colors[color]}>
        <path d='M3,8 L9,8 C9.55228475,8 10,8.44771525 10,9 C10,9.55228475 9.55228475,10 9,10 L1.00000017,10 C0.44771525,10 0,9.55228475 0,9 L0,1 C0,0.44771525 0.44771525,0 1,0 C1.55228475,0 2,0.44771525 2,1 L2,7 C2,7.55228475 2.44771525,8 3,8 Z' />
      </g>
    </g>
  </Icon>
)

export default ArrowIcon
