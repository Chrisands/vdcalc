import React from 'react'
import { Column, Layout } from 'flex-layouts'

const App = ({ children }) => (
  <Column fill>
    <Layout justify='center'>
      {children}
    </Layout>
  </Column>
)

export default App
