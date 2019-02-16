import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Calculator from '@vd/calculator/src/containers/mobile/Calculator'
import App from './App'

const Routes = () => (
  <App>
    <Switch>
      <Route path='/' component={Calculator} />
    </Switch>
  </App>
)

export default Routes
