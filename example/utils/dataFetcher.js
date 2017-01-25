import React from 'react'

import DataFetcher from '../components/DataFetcher'

const dataFetcher = ({ dispatch, getState, runSaga }) => ({
  renderRouterContext: (child, props) => (
    <DataFetcher
      routerProps={props}
      dispatch={dispatch}
      getState={getState}
      runSaga={runSaga}
    >
      {child}
    </DataFetcher>
  )
})
export default dataFetcher
