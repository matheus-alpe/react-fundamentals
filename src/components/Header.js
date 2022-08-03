import React, { useContext } from "react"
import PropTypes from 'prop-types'

import { ThemeContext } from '../contexts'
import { Button } from "./"

export function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext)
  
  return (
    <>
      <h1>{props.title}</h1>
      <Button onClick={onToggleTheme}>Mudar Tema</Button>
      {props.children}

      <hr />
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

Header.defaultProps = {
  title: 'Default Title Blog'
}