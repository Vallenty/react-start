import React, { Component } from 'react'

class App extends Component {
  state = {
    // изначальное состояние компонента
  }

  roll = () => {
    const rc = () => Math.floor(Math.random() * Math.floor(10))
    return `${rc()}${rc()}${rc()}`
  }

  render () {
    return <div/>

  }
}

export default App
