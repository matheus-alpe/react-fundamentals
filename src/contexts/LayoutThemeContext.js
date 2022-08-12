import React, { useState, createContext, useMemo, useEffect, useRef } from 'react'
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

  //not execute on first render
  const isFirstRender = useRef(true)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    console.debug('useEffect after first render')
  }, [theme])

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