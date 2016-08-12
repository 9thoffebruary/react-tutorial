import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component {
  render () {
    return (
      <h1>Hello Saille!</h1>
    )
  }
}

render(<App />, document.getElementById('app'));
