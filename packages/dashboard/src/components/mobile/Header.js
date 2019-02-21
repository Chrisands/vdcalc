import React from 'react'
import { injectIntl } from 'react-intl'
import { Row, Layout } from 'flex-layouts'
import { Block } from '@vd/ui/src/content'
import { Logo } from '@vd/ui/src/logo'
import { Ghost } from '@vd/ui/src/button'
import { CopyIcon, MinusIcon, PlusIcon } from '@vd/ui/src/icons'

const Header = ({
  onAddProvider,
  onRemoveProvider,
  onCopy,
  onClear,
}) => (
  <Block>
    <Row
      align='center'
    >
      <Layout basis='8pt' />
      <Layout>
        <Logo
          width={40}
          height={40}
          onClick={onClear}
        />
      </Layout>
      <Layout basis='16pt' />
      <Layout grow={1} />
      <Layout basis='16pt' />
      <Layout>
        <Ghost
          width='medium'
          height='medium'
          color='gray600'
          onClick={onAddProvider}
        >
          <PlusIcon
            color='gray400'
          />
        </Ghost>
      </Layout>
      <Layout basis='8pt' />
      <Layout>
        <Ghost
          width='medium'
          height='medium'
          color='gray600'
          onClick={onRemoveProvider}
        >
          <MinusIcon
            color='gray400'
          />
        </Ghost>
      </Layout>
      <Layout basis='8pt' />
      <Layout>
        <Ghost
          width='medium'
          height='medium'
          color='gray600'
          onClick={onCopy}
        >
          <CopyIcon
            width={10}
            height={12}
            color='gray400'
          />
        </Ghost>
      </Layout>
      <Layout basis='16pt' />
    </Row>
  </Block>
)

export default injectIntl(Header)
