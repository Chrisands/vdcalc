import React from 'react'
import { Row, Column, Layout } from 'flex-layouts'
import { injectIntl } from 'react-intl'
import { Decimal } from 'decimal.js-light'
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
  onChangeProviderSum,
}) => {
  let managerProfit = new Decimal(0)
  let itemsCost = new Decimal(0)

  for (let i = 0; i < providers.length; i += 1) {
    let providerSum = new Decimal(0)
    for (let j = 0; j < providers[i].keys.length; j += 1) {
      const item = providers[i].keys[j]
      itemsCost = itemsCost
        .plus(new Decimal(item.cost)
          .times(item.amount))
      managerProfit = managerProfit
        .plus(new Decimal(
          new Decimal(item.cost)
            .times(item.amount))
          .times(new Decimal(providers[i].percent)
            .dividedBy(100)))
      providerSum = providerSum.plus((new Decimal(item.cost)
        .times(item.amount))
        .minus(new Decimal(
          new Decimal(item.cost)
            .times(item.amount))
          .times(new Decimal(providers[i].percent)
            .dividedBy(100))))
    }

    onChangeProviderSum(providerSum.toNumber(), i)
  }

  return (
    <Column>
      <Layout>
        <Row
          align='center'
        >
          <Layout basis='164pt'>
            <Text
              color='blue200'
            >
              {intl.formatMessage(messages.orderSum)}
            </Text>
          </Layout>
          <Layout basis='16pt' grow={1} />
          <Layout basis='64pt' grow={1}>
            <Text
              color='blue200'
            >
              {itemsCost.plus(deliveryCost).toNumber()}
            </Text>
          </Layout>
        </Row>
      </Layout>
      <Layout basis='16pt' />
      <Layout>
        <Row
          align='center'
        >
          <Layout basis='164pt'>
            <Text
              color='blue200'
            >
              {intl.formatMessage(messages.provider)}
            </Text>
          </Layout>
          <Layout basis='16pt' grow={1} />
          <Layout basis='64pt' grow={1}>
            <Text
              color='blue200'
            >
              {itemsCost.minus(managerProfit).toNumber()}
            </Text>
          </Layout>
        </Row>
      </Layout>
      <Layout basis='16pt' />
      <Layout>
        <Row
          align='center'
        >
          <Layout basis='164pt'>
            <Text
              color='blue200'
            >
              {intl.formatMessage(messages.itemsCost)}
            </Text>
          </Layout>
          <Layout basis='16pt' grow={1} />
          <Layout basis='64pt' grow={1}>
            <Text
              color='blue200'
            >
              {itemsCost.toNumber()}
            </Text>
          </Layout>
        </Row>
      </Layout>
      <Layout basis='16pt' />
      <Layout>
        <Row
          align='center'
        >
          <Layout basis='164pt'>
            <Text
              color='blue200'
            >
              {intl.formatMessage(messages.currierFee)}
            </Text>
          </Layout>
          <Layout basis='16pt' grow={1} />
          <Layout basis='64pt' grow={1}>
            <Text
              color='blue200'
            >
              {deliveryCost + currierSurcharge}
            </Text>
          </Layout>
        </Row>
      </Layout>
      <Layout basis='16pt' />
      <Layout>
        <Row
          align='center'
        >
          <Layout basis='164pt'>
            <Text
              color='blue200'
            >
              {intl.formatMessage(messages.managerProfit)}
            </Text>
          </Layout>
          <Layout basis='16pt' grow={1} />
          <Layout basis='64pt' grow={1}>
            <Text
              color='blue200'
            >
              {managerProfit.minus(currierSurcharge).toNumber()}
            </Text>
          </Layout>
        </Row>
      </Layout>
      <Layout basis='8pt' />
      <Layout>
        <Row
          align='center'
        >
          <Layout basis='152pt'>
            <Text
              color='blue200'
            >
              {intl.formatMessage(messages.deliveryCost)}
            </Text>
          </Layout>
          <Layout basis='16pt' grow={1} />
          <Layout basis='76pt' grow={1}>
            <Input
              value={deliveryCost}
              onChange={onChangeDeliveryCost}
              type='tel'
              mask='number'
            />
          </Layout>
        </Row>
      </Layout>
      <Layout basis='4pt' />
      <Layout>
        <Row
          align='center'
        >
          <Layout basis='152pt'>
            <Text
              color='blue200'
            >
              {intl.formatMessage(messages.currierSurcharge)}
            </Text>
          </Layout>
          <Layout basis='16pt' grow={1} />
          <Layout basis='76pt' grow={1}>
            <Input
              value={currierSurcharge}
              onChange={onChangeCurrierSurcharge}
              type='tel'
              mask='number'
            />
          </Layout>
        </Row>
      </Layout>
    </Column>
  )
}

export default injectIntl(Statistic)
