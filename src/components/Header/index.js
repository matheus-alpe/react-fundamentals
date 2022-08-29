import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container } from './styles'

import ThemeSwitcher from '../ThemeSwitcher'
import { Link } from 'react-router-dom'

export default function Header() {
  const history = useHistory()
  console.log(history)

  function handleNavigate() {
    history.push('/posts')
  }

  return (
    <Container>
      <h1>
        <Link to="/">JStack's Blog</Link>
      </h1>

      <button onClick={handleNavigate} style={{ color: 'red' }}>Posts</button>

      <ThemeSwitcher />
    </Container>
  )
}
