import React, { createContext, Component } from 'react'
import { ThemeProvider } from 'styled-components'

import themes from '../styles/themes'

export const ThemeContext = createContext()

export class LayoutThemeProvider extends Component {
  state = {
    theme: window.localStorage.getItem('theme') || 'dark'
  }

  handleToggleTheme = () => {
    console.log('handleToggleTheme executed')

    // force component rendering
    this.forceUpdate();

    // this.setState(prevState => {
    //   const theme = (prevState.theme === 'dark' ? 'light' : 'dark')
    //   window.localStorage.setItem('theme', theme)

    //   return {
    //     theme
    //   }
    // })
  }

  render() {
    const { theme } = this.state

    console.log('App renderizou')

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <ThemeContext.Provider
          value={{
            theme,
            onToggleTheme: this.handleToggleTheme,
          }}
        >
          {this.props.children}
        </ThemeContext.Provider>
      </ThemeProvider>
    )
  }
}