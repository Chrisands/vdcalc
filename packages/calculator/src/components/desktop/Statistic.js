import React from 'react'
import { Row, Column, Layout } from 'flex-layouts'
import { injectIntl } from 'react-intl'
import { Text } from '@vd/ui/src/text'
import { ReactSelect } from '@vd/ui/src/select'
import { Input } from '@vd/ui/src/input'
import messages from '../../messages'

const Statistic = ({
  intl,
  orderSum = '0',
  provider = '0',
  itemsCost = '0',
  currierFee = '0',
  managerProfit = '0',
}) => (
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
            {orderSum}
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
            {provider}
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
            {currierFee}
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
            {managerProfit}
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
          <ReactSelect />
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
          <Input />
        </Layout>
        <Layout basis='16px' />
      </Row>
    </Layout>
  </Column>
)

export default injectIntl(Statistic)
