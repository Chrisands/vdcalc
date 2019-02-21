import React from 'react'
import { Row, Column, Layout } from 'flex-layouts'
import { injectIntl } from 'react-intl'
import { Text } from '@vd/ui/src/text'
import { Input } from '@vd/ui/src/input'
import messages from '../../messages'

const Statistic = ({
  intl,
  providers,
  deliveryCost = 0,
  currierSurcharge = 0,
  onChangeDeliveryCost,
  onChangeCurrierSurcharge,
}) => {
  let managerProfit = 0
  let itemsCost = 0

  for (let i = 0; i < providers.length; i += 1) {
    for (let j = 0; j < providers[i].keys.length; j += 1) {
      const item = providers[i].keys[j]
      itemsCost += (item.cost * item.amount)
      managerProfit += (item.cost * item.amount) * (providers[i].percent / 100)
    }
  }

  return (
    <Column>
      <Layout>
        <Row
          align='center'
        >
          <Layout basis='16px' />
          <Layout basis='164px'>
            <Text
              color='blue200'
            >
              {intl.formatMessage(messages.orderSum)}
            </Text>
          </Layout>
          <Layout basis='16px' />
          <Layout basis='80px'>
            <Text
              color='blue200'
            >
              {itemsCost + deliveryCost}
            </Text>
          </Layout>
          <Layout basis='16px' />
        </Row>
      </Layout>
      <Layout basis='16px' />
      <Layout>
        <Row
          align='center'
        >
          <Layout basis='16px' />
          <Layout basis='164px'>
            <Text
              color='blue200'
            >
              {intl.formatMessage(messages.provider)}
            </Text>
          </Layout>
          <Layout basis='16px' />
          <Layout basis='80px'>
            <Text
              color='blue200'
            >
              {itemsCost - managerProfit}
            </Text>
          </Layout>
          <Layout basis='16px' />
        </Row>
      </Layout>
      <Layout basis='16px' />
      <Layout>
        <Row
          align='center'
        >
          <Layout basis='16px' />
          <Layout basis='164px'>
            <Text
              color='blue200'
            >
              {intl.formatMessage(messages.itemsCost)}
            </Text>
          </Layout>
          <Layout basis='16px' />
          <Layout basis='80px'>
            <Text
              color='blue200'
            >
              {itemsCost}
            </Text>
          </Layout>
          <Layout basis='16px' />
        </Row>
      </Layout>
      <Layout basis='16px' />
      <Layout>
        <Row
          align='center'
        >
          <Layout basis='16px' />
          <Layout basis='164px'>
            <Text
              color='blue200'
            >
              {intl.formatMessage(messages.currierFee)}
            </Text>
          </Layout>
          <Layout basis='16px' />
          <Layout basis='80px'>
            <Text
              color='blue200'
            >
              {deliveryCost + currierSurcharge}
            </Text>
          </Layout>
          <Layout basis='16px' />
        </Row>
      </Layout>
      <Layout basis='16px' />
      <Layout>
        <Row
          align='center'
        >
          <Layout basis='16px' />
          <Layout basis='164px'>
            <Text
              color='blue200'
            >
              {intl.formatMessage(messages.managerProfit)}
            </Text>
          </Layout>
          <Layout basis='16px' />
          <Layout basis='80px'>
            <Text
              color='blue200'
            >
              {managerProfit - currierSurcharge}
            </Text>
          </Layout>
          <Layout basis='16px' />
        </Row>
      </Layout>
      <Layout basis='8px' />
      <Layout>
        <Row
          align='center'
        >
          <Layout basis='16px' />
          <Layout basis='152px'>
            <Text
              color='blue200'
            >
              {intl.formatMessage(messages.deliveryCost)}
            </Text>
          </Layout>
          <Layout basis='16px' />
          <Layout basis='80px'>
            <Input
              value={deliveryCost}
              onChange={onChangeDeliveryCost}
              mask='number'
            />
          </Layout>
          <Layout basis='16px' />
        </Row>
      </Layout>
      <Layout basis='4px' />
      <Layout>
        <Row
          align='center'
        >
          <Layout basis='16px' />
          <Layout basis='152px'>
            <Text
              color='blue200'
            >
              {intl.formatMessage(messages.currierSurcharge)}
            </Text>
          </Layout>
          <Layout basis='16px' />
          <Layout basis='80px'>
            <Input
              value={currierSurcharge}
              onChange={onChangeCurrierSurcharge}
              mask='number'
            />
          </Layout>
          <Layout basis='16px' />
        </Row>
      </Layout>
    </Column>
  )
}

export default injectIntl(Statistic)
