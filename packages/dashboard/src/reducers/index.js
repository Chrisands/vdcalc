import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import config from './config'
import locale from './locale'

export default history => combineReducers({
  router: connectRouter(history),
  config,
  locale,
})
