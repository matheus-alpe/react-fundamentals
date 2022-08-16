import React, { Component } from 'react'

import { LayoutThemeProvider } from './contexts'

import GlobalStyle from './styles/global'
import Layout from './components/Layout'


class App extends Component {
  componentDidMount() {
    console.debug('componentDidMount executed')
  }

  render() {
    return (
      <LayoutThemeProvider>
        <GlobalStyle />
        <Layout />
      </LayoutThemeProvider>
    )
  }
}

export default App