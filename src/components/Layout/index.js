import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import { useTheme } from 'styled-components'

import Header from '../Header'
import Footer from '../Footer'

import Routes from '../../routes'

import { Nav } from './styles'

export default function Layout({ onToggleTheme, selectedTheme }) {
  const theme = useTheme()

  return (
    <BrowserRouter>
      <Header
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />

      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/1231231322">Post</Link>
      </Nav>

      <Routes />

      <Footer
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
    </BrowserRouter>
  )
}
