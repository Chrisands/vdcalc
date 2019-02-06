/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react'
import { Manager, Popper } from 'react-popper'
import { createPortal } from 'react-dom'
import OnOutsideClick from './OnOutsideClick'

const Layer = ({
  children,
  align = 'top',
  topOffset = 0,
  leftOffset = 0,
  zIndex,
  inner = true,
  parent,
  portal,
  onOutsideClick,
}) => {
  const element = typeof document !== 'undefined' ? document.createElement('div') : null

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (element) {
      document.body.appendChild(element)
      return () => {
        document.body.removeChild(element)
      }
    }
  })

  if (typeof document !== 'undefined' && portal) {
    if (portal) {
      return (
        <Manager>
          {createPortal(
            <Popper
              placement={align}
              modifiers={{
                inner: {
                  enabled: inner,
                },
              }}
              referenceElement={parent}
            >
              {({
                ref, style, placement,
              }) => (
                <OnOutsideClick
                  onOutsideClick={onOutsideClick}
                >
                  <div
                    ref={ref}
                    data-placement={placement}
                    style={{
                      ...style,
                      top: style.top + topOffset,
                      left: style.left + leftOffset,
                      zIndex,
                    }}
                  >
                    {children}
                  </div>
                </OnOutsideClick>
              )}
            </Popper>,
            element,
          )}
        </Manager>
      )
    }
  }
  return (
    <Manager>
      <Popper
        placement={align}
        modifiers={{
          inner: {
            enabled: inner,
          },
        }}
        referenceElement={parent}
      >
        {({
          ref, style, placement,
        }) => (
          <OnOutsideClick
            onOutsideClick={onOutsideClick}
          >
            <div
              ref={ref}
              data-placement={placement}
              style={{
                ...style,
                top: style.top + topOffset,
                left: style.left + leftOffset,
                zIndex,
              }}
            >
              {children}
            </div>
          </OnOutsideClick>
        )}
      </Popper>
    </Manager>
  )
}

export default Layer
