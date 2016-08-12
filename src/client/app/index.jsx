import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component {
  render () {
    return(
      <div>
        <p> Hello Saille! - My first react setup</p>
        <h3>Testing</h3>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
