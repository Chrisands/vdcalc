import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import locale from './locale'

export default history => combineReducers({
  router: connectRouter(history),
  locale,
})
