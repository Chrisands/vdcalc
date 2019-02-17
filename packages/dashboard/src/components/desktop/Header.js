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
      justify='center'
    >
      <Layout basis='800px'>
        <Row
          align='center'
        >
          <Layout>
            <Logo
              width={40}
              height={40}
            />
          </Layout>
          <Layout basis='16px' />
          <Layout basis='152px'>
            <ReactSelect
              value='Calculator'
            />
          </Layout>
          <Layout grow={1} />
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
          <Layout basis='248px' />
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
        </Row>
      </Layout>
    </Row>
  </Block>
)

export default injectIntl(Header)
