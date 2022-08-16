import React, { Component } from 'react'

import { LayoutThemeProvider } from './contexts'

import GlobalStyle from './styles/global'
import Layout from './components/Layout'


class App extends Component {
  state = {
    changed: false
  }

  componentDidMount() {
    console.debug('componentDidMount executed')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate executed', { prevProps, prevState })
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch executed', { error, info })
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate executed', { nextProps, nextState })

    return true
  }

  render() {
    return (
      <LayoutThemeProvider>
        <button onClick={() => this.setState({ changed: !this.changed })}>Change</button>
        <GlobalStyle />
        <Layout />
      </LayoutThemeProvider>
    )
  }
}

export default App