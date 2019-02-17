import React from 'react'
import { injectIntl } from 'react-intl'
import { Row, Layout } from 'flex-layouts'
import { Block } from '@vd/ui/src/content'
import { Logo } from '@vd/ui/src/logo'
import { ReactSelect } from '@vd/ui/src/select'
import { Ghost } from '@vd/ui/src/button'
import { CopyIcon, MinusIcon, PlusIcon } from '@vd/ui/src/icons'

const Header = () => (
  <Block>
    <Row
      align='center'
    >
      <Layout basis='8px' />
      <Layout>
        <Logo
          width={40}
          height={40}
        />
      </Layout>
      <Layout basis='16px' />
      <Layout basis='112px'>
        <ReactSelect
          value='Calculator'
        />
      </Layout>
      <Layout basis='16px' />
      <Layout>
        <Ghost
          width='medium'
          height='medium'
          color='gray600'
        >
          <PlusIcon
            color='gray400'
          />
        </Ghost>
      </Layout>
      <Layout basis='8px' />
      <Layout>
        <Ghost
          width='medium'
          height='medium'
          color='gray600'
        >
          <MinusIcon
            color='gray400'
          />
        </Ghost>
      </Layout>
      <Layout basis='8px' />
      <Layout>
        <Ghost
          width='medium'
          height='medium'
          color='gray600'
        >
          <CopyIcon
            width={10}
            height={12}
            color='gray400'
          />
        </Ghost>
      </Layout>
      <Layout basis='16px' />
    </Row>
  </Block>
)

export default injectIntl(Header)
