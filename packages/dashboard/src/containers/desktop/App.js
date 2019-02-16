import React from 'react'
import { Column, Layout } from 'flex-layouts'

const App = ({ children }) => (
  <Column fill>
    <Layout justify='center'>
      {process.env}
      {children}
    </Layout>
  </Column>
)

export default App
