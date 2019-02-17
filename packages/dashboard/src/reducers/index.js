import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import calculator from '@vd/calculator/src/reducers'
import locale from './locale'

export default history => combineReducers({
  router: connectRouter(history),
  locale,
  calculator,
})
