import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory, match } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store'
import createRoutes from './routes'

const store = configureStore({}, browserHistory)
const history = syncHistoryWithStore(browserHistory, store)
const routes = createRoutes(store)
const { dispatch } = store

history.listen((location) => {
  match({ routes, location, history }, (error, redirectLocation, renderProps) => {
    if (renderProps) {
      const { components } = renderProps
      const locals = {
        path: renderProps.location.pathname,
        query: renderProps.location.query,
        params: renderProps.params,
        store,
        dispatch
      }

      // TODO hookini cast magic
    }
  })
})

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}

render()
