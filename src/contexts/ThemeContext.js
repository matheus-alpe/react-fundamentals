import React, { useState, createContext } from 'react'
import PropTypes from 'prop-types'

export const ThemeContext = createContext()

export function ThemeProvider(props) {

  const [theme, setTheme] = useState('dark')

  function handleToggleTheme() {
    setTheme((prevThemeState) => prevThemeState === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        onToggleTheme: handleToggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
