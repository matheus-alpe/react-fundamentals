import React from 'react'
import { Container } from './styles'

import ThemeSwitcher from '../ThemeSwitcher'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Container>
      <h1>
        <Link to="/">JStack's Blog</Link>
      </h1>

      <ThemeSwitcher />
    </Container>
  )
}
