import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './pages/App'
import Home from './pages/Home'

export default (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  )
}
