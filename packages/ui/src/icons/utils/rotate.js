const directions = {
  left: 0,
  right: 180,
}

const rotate = (values, width, height) => {
  const target = Object.keys(values).filter(key => values[key]).shift()

  if (target) {
    return `rotate(${directions[target]} ${width / 2} ${height / 2})`
  }

  return null
}

export default rotate
