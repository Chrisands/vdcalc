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
    <Layout basis='8pt' />
    <Layout basis='95vw'>
      <Column>
        <Layout basis='24pt' />
        <Layout>
          <Statistic
            providers={providers}
            deliveryCost={deliveryCost}
            currierSurcharge={currierSurcharge}
            onChangeDeliveryCost={onChangeDeliveryCost}
            onChangeCurrierSurcharge={onChangeCurrierSurcharge}
            onChangeProviderSum={onChangeProviderSum}
          />
        </Layout>
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
      </Column>
    </Layout>
    <Layout basis='8pt' />
  </Row>
)

export default injectIntl(Calculator)
