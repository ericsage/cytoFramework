import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Map } from 'immutable'
import store from './state/store.jsx'
import emptyReducer from './state/reducers/emptyReducer.jsx'
import DevTools from './containers/DevTools.jsx'

export default class CytoFramework {

  constructor(reducers = {emptyReducer}) {
    this.store = store(reducers)
  }

  render(element, widget) { render(element, widget, {}, []) }
  render(element, widget, props) { render(element, widget, props, []) }
  render(element, widget, props, children) {
    var component = React.createElement(widget, props, children)
    ReactDOM.render(
        React.createElement(Provider, {store: this.store}, component),
      element)
  }

  dev(element) {
    this.render(element, DevTools)
  }

}
