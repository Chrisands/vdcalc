/* eslint-disable react/no-array-index-key */
import React, { Fragment } from 'react'
import { Column, Layout, Row } from 'flex-layouts'
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
      <Layout grow={1} shrink={1}>
        <Input
          value={cost}
          onChange={value => onChangeCost(value, providerIndex, positionIndex)}
          type='tel'
          mask='number'
        />
      </Layout>
      <Layout basis='8pt' />
      <Layout>
        <Counter
          value={amount}
          onChange={value => onChangeAmount(value, providerIndex, positionIndex)}
        />
      </Layout>
      <Layout basis='8pt' />
      <Layout basis='80pt'>
        <Input
          value={cost * amount}
          readOnly
        />
      </Layout>
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
      basis='8pt'
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
  onChangeProviderName,
}) => (
  <Layout
    key={`provider-${providerIndex}`}
  >
    <Row>
      <Layout grow={1} shrink={1}>
        <Input
          value={name}
          onChange={value => onChangeProviderName(value, providerIndex)}
        />
      </Layout>
      <Layout basis='8pt' />
      <Layout basis='64pt'>
        <Input
          value={percent}
          onChange={value => onChangePercent(value, providerIndex)}
          type='tel'
          mask='number'
          rightChild={(
            <PercentIcon
              width={14}
              height={14}
            />
          )}
        />
      </Layout>
      <Layout basis='8pt' />
      <Layout>
        <Counter
          value={positionsCount}
          onChange={value => onChangePositions(value, providerIndex)}
          minValue={1}
        />
      </Layout>
    </Row>
  </Layout>
)

const renderProviders = ({
  providers,
  onChangeCost,
  onChangeAmount,
  onChangePercent,
  onChangePositions,
  onChangeProviderName,
}) => providers.map((provider, index) => (
  <Fragment
    key={`providers-${index}`}
  >
    <Layout
      basis='32pt'
    />
    {renderProvider({
      name: provider.name,
      percent: provider.percent,
      positionsCount: provider.keys.length,
      providerIndex: index,
      onChangePercent,
      onChangePositions,
      onChangeProviderName,
    })}
    <Layout
      basis='24pt'
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
  onChangeProviderName = () => {},
}) => (
  <Column>
    {renderProviders({
      providers,
      onChangeCost,
      onChangeAmount,
      onChangePercent,
      onChangePositions,
      onChangeProviderName,
    })}
  </Column>
)

export default Data
