import React from 'react'

const getSize = (width, height, viewBox, ratio) => {
  if (!width && !height) {
    const sizes = viewBox.split(' ')
    return { width: sizes[2], height: sizes[3] }
  }
  if (width && height) return { width, height }
  return {
    ...width && { width, height: (width / ratio) },
    ...height && { width: (height * ratio), height },
  }
}
const getRatio = (viewBox, originalWidth, originalHeight) => {
  if (originalWidth && originalHeight) return originalWidth / originalHeight
  const sizes = viewBox.split(' ')
  return sizes[2] / sizes[3]
}
const getViewBox = (viewBox, originalWidth, originalHeight) => viewBox || `0 0 ${originalWidth} ${originalHeight}`

const Icon = ({
  originalWidth,
  originalHeight,
  width,
  height,
  fill = '#000000',
  children,
  viewBox,
}) => (
  <svg
    fill={fill}
    viewBox={getViewBox(viewBox, originalWidth, originalHeight)}
    {...getSize(width, height, viewBox, getRatio(viewBox, originalWidth, originalHeight))}
  >
    {children}
  </svg>
)
export default Icon
