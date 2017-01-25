import React from 'react'

export function App({ children }) {
  return (
    <div>
      <h1>Example App</h1>
      {children}
    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.node
}

export default (App)
