import React, { useContext } from "react"
import PropTypes from 'prop-types'

import { ThemeContext } from '../contexts'
import { Button } from "./"

export function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext)
  
  return (
    <header
      style={{
        background: '#ccc',
        fontFamily: 'sans-serif'
      }}
    >
      <h1>{props.title}</h1>
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