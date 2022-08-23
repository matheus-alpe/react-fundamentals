import React, { useContext } from 'react'

import { ThemeContext } from '../../contexts'

export default function ThemeSwitcher() {
  const { onToggleTheme, theme } = useContext(ThemeContext)

  return (
    <button
      type="button"
      onClick={onToggleTheme}
    >
      {theme === 'dark' ? '🌞' : '🌚'}
    </button>
  )
}
