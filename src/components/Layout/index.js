import React from 'react'
import { useTheme } from 'styled-components'

import Header from '../Header'
import Footer from '../Footer'

import Routes from '../../routes'

export default function Layout({ onToggleTheme, selectedTheme }) {
  const theme = useTheme()

  return (
    <>
      <Header
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />

      <Routes />

      <Footer
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
    </>
  )
}
