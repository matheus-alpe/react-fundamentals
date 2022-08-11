import React, { useState, createContext, useMemo } from 'react'
import { ThemeProvider } from 'styled-components'

import themes from '../styles/themes'

export const ThemeContext = createContext()

export function LayoutThemeProvider(props) {
  const [theme, setTheme] = useState('dark')

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme])

  function handleToggleTheme() {
    setTheme((prevThemeState) => prevThemeState === 'dark' ? 'light' : 'dark')
  }


  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider
        value={{
          theme,
          onToggleTheme: handleToggleTheme,
        }}
      >
        {props.children}
      </ThemeContext.Provider>
    </ThemeProvider>

  )
}