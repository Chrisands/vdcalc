import React from 'react'
import { StyleSheet } from 'elementum'
import { Layout } from 'flex-layouts'
import { Condition } from '../condition'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    transition: '0.2s',
    outline: 'none',

    width: '100%',
    height: '32px',
    borderRadius: '16px',
    backgroundColor: '#EEE',
  },
  disabled: {
    backgroundColor: 'rgba(238, 238, 238, 0.3)',
    boxShadow: 'none !important',
  },
  hover: {
    boxShadow: 'inset 0 0 4px 0 rgba(0, 0, 0, 0.5)',
  },
  focus: {
    boxShadow: '0 0 4px 0 rgba(102, 102, 102, 0.5)',
  },
})

const Fake = ({
  children,
  disabled,
  focus,
  hover,
  leftChild,
  rightChild,
}) => (
  <div
    className={styles({
      disabled,
      focus,
      hover,
      leftChild,
      rightChild,
    })}
    tabIndex='-1'
  >
    <Condition match={leftChild}>
      <Layout basis='12px' />
      <Layout>
        {leftChild}
      </Layout>
    </Condition>
    <Condition match={!leftChild}>
      <Layout basis='12px' />
    </Condition>
    {children}
    <Condition match={!rightChild}>
      <Layout basis='12px' />
    </Condition>
    <Condition match={rightChild}>
      <Layout>
        {rightChild}
      </Layout>
      <Layout basis='12px' />
    </Condition>
  </div>
)

export default Fake
