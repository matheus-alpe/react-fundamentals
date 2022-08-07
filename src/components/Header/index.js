import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Title from '../Title'

import { ThemeContext } from '../../contexts'
import { Button } from '../Button'

export function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext)
  
  return (
    <header>
      <Title>{props.title}</Title>

      <Button onClick={onToggleTheme}>Mudar Tema</Button>
      
      {props.children}

      <hr />
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

Header.defaultProps = {
  title: 'Default Title Blog'
}