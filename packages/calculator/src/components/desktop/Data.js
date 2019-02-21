/* eslint-disable react/no-array-index-key */
import React, { Fragment } from 'react'
import { Column, Layout, Row } from 'flex-layouts'
import { ReactSelect } from '@vd/ui/src/select'
import { Input } from '@vd/ui/src/input'
import Counter from '@vd/ui/src/counter/Counter'
import { PercentIcon } from '@vd/ui/src/icons'

const renderPosition = ({
  cost,
  amount,
  providerIndex,
  positionIndex,
  onChangeCost,
  onChangeAmount,
}) => (
  <Layout
    key={`position-${positionIndex}-provider-${providerIndex}`}
  >
    <Row>
      <Layout basis='184px'>
        <Input
          value={cost}
          onChange={value => onChangeCost(value, providerIndex, positionIndex)}
          mask='number'
        />
      </Layout>
      <Layout basis='8px' />
      <Layout basis='88px'>
        <Counter
          value={amount}
          onChange={value => onChangeAmount(value, providerIndex, positionIndex)}
        />
      </Layout>
      <Layout basis='8px' />
      <Layout basis='64px'>
        <Input
          value={cost * amount}
          readOnly
        />
      </Layout>
      <Layout basis='16px' />
    </Row>
  </Layout>
)

const renderPositions = ({
  index,
  providers,
  onChangeCost,
  onChangeAmount,
}) => providers[index].keys.map((key, i) => (
  <Fragment
    key={`positions-${index}-${i}`}
  >
    {renderPosition({
      cost: key.cost,
      amount: key.amount,
      providerIndex: index,
      positionIndex: i,
      onChangeCost,
      onChangeAmount,
    })}
    <Layout
      basis='8px'
    />
  </Fragment>
))

const renderProvider = ({
  name,
  percent,
  positionsCount,
  providerIndex,
  onChangePercent,
  onChangePositions,
}) => (
  <Layout
    key={`provider-${providerIndex}`}
  >
    <Row>
      <Layout basis='184px'>
        <ReactSelect
          value={name}
        />
      </Layout>
      <Layout basis='8px' />
      <Layout basis='64px'>
        <Input
          value={percent}
          onChange={value => onChangePercent(value, providerIndex)}
          mask='number'
          rightChild={(
            <PercentIcon
              width={14}
              height={14}
            />
          )}
        />
      </Layout>
      <Layout basis='8px' />
      <Layout basis='88px'>
        <Counter
          value={positionsCount}
          onChange={value => onChangePositions(value, providerIndex)}
          minValue={1}
        />
      </Layout>
      <Layout basis='16px' />
    </Row>
  </Layout>
)

const renderProviders = ({
  providers,
  onChangeCost,
  onChangeAmount,
  onChangePercent,
  onChangePositions,
}) => providers.map((provider, index) => (
  <Fragment
    key={`providers-${index}`}
  >
    <Layout
      basis='32px'
    />
    {renderProvider({
      name: provider.name,
      percent: provider.percent,
      positionsCount: provider.keys.length,
      providerIndex: index,
      onChangePercent,
      onChangePositions,
    })}
    <Layout
      basis='24px'
    />
    {renderPositions({
      index,
      providers,
      onChangeCost,
      onChangeAmount,
      onChangePercent,
      onChangePositions,
    })}
  </Fragment>
))

const Data = ({
  providers = [],
  onChangeCost = () => {},
  onChangeAmount = () => {},
  onChangePercent = () => {},
  onChangePositions = () => {},
}) => (
  <Column>
    {renderProviders({
      providers,
      onChangeCost,
      onChangeAmount,
      onChangePercent,
      onChangePositions,
    })}
  </Column>
)

export default Data
