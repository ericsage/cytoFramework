import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import DevTools from '../containers/DevTools.jsx'
import emptyReducer from './reducers/emptyReducer.jsx'

const logger = createLogger()

const finalCreateStore = compose(
  applyMiddleware(thunk, logger),
  DevTools.instrument()
)(createStore)

export default function configureStore(reducers = { emptyReducer }) {
  const store = finalCreateStore(combineReducers(reducers))
  return store
}
