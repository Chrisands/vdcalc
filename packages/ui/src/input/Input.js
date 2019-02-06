import React, { useRef, useState } from 'react'
import { StyleSheet } from 'elementum'
import Fake from './Fake'
import InputElement from './InputElement'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    width: '100%',
  },
})

const Input = ({
  value,
  onChange,
  disabled,
  leftChild,
  rightChild,
  readOnly,
  onClick,
  ...props
}) => {
  const ref = useRef(null)
  const [focused, setFocus] = useState(false)
  const [hovered, setHover] = useState(false)

  const onFocus = () => {
    ref.current.focus()
    setFocus(true)
  }

  const onBlur = () => {
    ref.current.blur()
    setFocus(false)
  }

  return (
    <div
      className={styles()}
      onFocus={onFocus}
      onBlur={onBlur}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <Fake
        focus={focused}
        hover={hovered}
        disabled={disabled}
        leftChild={leftChild}
        rightChild={rightChild}
      >
        <InputElement
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
          value={value}
          onChange={onChange}
          {...props}
        />
      </Fake>
    </div>
  )
}

export default Input
