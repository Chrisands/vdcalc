import React from 'react'
import { render } from 'react-dom'
import { createBrowserHistory } from 'history'
import 'flex-layouts/lib/flex-layouts.css'
import Root from './containers/desktop/Root'
import { configureStore } from './store'
import './index.css'

const history = createBrowserHistory()
const { store, persistor } = configureStore({}, history)

render(
  <Root
    store={store}
    history={history}
    persistor={persistor}
  />,
  document.getElementById('app'),
)
