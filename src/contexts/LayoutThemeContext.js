import React, { useState, createContext, useMemo, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import themes from '../styles/themes'

export const ThemeContext = createContext()

export function LayoutThemeProvider(props) {
  const [theme, setTheme] = useState('dark')

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme])

  function handleToggleTheme() {
    setTheme((prevThemeState) => {
      const theme = prevThemeState === 'dark' ? 'light' : 'dark'
      window.localStorage.setItem('theme', theme)
      return theme
    })
  }

  // hooks
  useEffect(() => {
    const theme = window.localStorage.getItem('theme')
    if (!theme) return
    setTheme(theme)
  }, [])

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