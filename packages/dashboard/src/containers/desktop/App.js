import React from 'react'
import { Column, Layout } from 'flex-layouts'
import Header from './Header'

const App = ({ children }) => (
  <Column fill>
    <Layout basis='50px'>
      <Header />
    </Layout>
    <Layout grow={1}>
      {children}
    </Layout>
  </Column>
)

export default App
