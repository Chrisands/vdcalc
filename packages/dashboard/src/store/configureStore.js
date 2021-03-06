import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { routerMiddleware } from 'connected-react-router'
import storage from 'redux-persist/lib/storage'
import createRootReducer from '../reducers'
import api from './middleware/api'

const configureStore = (initialState, history) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const enhancer = composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      api(history),
    ),
  )

  const persistConfig = {
    key: 'root',
    storage,
  }

  const reducer = createRootReducer(history)
  const persistedReducer = persistReducer(persistConfig, reducer)

  const store = createStore(persistedReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(reducer))
  }

  const persistor = persistStore(store)

  return {
    store,
    persistor,
  }
}

export default configureStore
