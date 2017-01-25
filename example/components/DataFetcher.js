import { Component } from 'react'
// import { cast } from 'hookini'

export default class DataFetcher extends Component {
  componentWillMount() {
    const {
      routerProps: { location, components, params },
      getState,
      dispatch,
      runSaga
    } = this.props

    // cast('fetch', components, { getState, dispatch, runSaga, location, params })
  }

  render() {
    return this.props.children
  }
}
