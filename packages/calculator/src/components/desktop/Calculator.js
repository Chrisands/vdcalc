import React from 'react'
import { injectIntl } from 'react-intl'
import { Row, Column, Layout } from 'flex-layouts'
import Statistic from './Statistic'
import Data from './Data'

const Calculator = ({
  providers,
  deliveryCost,
  currierSurcharge,
  onChangeCost,
  onChangeAmount,
  onChangePercent,
  onChangeProviderName,
  onChangePositions,
  onChangeDeliveryCost,
  onChangeCurrierSurcharge,
  onChangeProviderSum,
}) => (
  <Row
    justify='center'
  >
    <Layout
      basis='800px'
    >
      <Row>
        <Layout>
          <Column>
            <Layout basis='32px' />
            <Statistic
              providers={providers}
              deliveryCost={deliveryCost}
              currierSurcharge={currierSurcharge}
              onChangeDeliveryCost={onChangeDeliveryCost}
              onChangeCurrierSurcharge={onChangeCurrierSurcharge}
              onChangeProviderSum={onChangeProviderSum}
            />
          </Column>
        </Layout>
        <Layout grow={1} />
        <Layout>
          <Data
            providers={providers}
            onChangeCost={onChangeCost}
            onChangeAmount={onChangeAmount}
            onChangePercent={onChangePercent}
            onChangePositions={onChangePositions}
            onChangeProviderName={onChangeProviderName}
          />
        </Layout>
      </Row>
    </Layout>
  </Row>
)

export default injectIntl(Calculator)
