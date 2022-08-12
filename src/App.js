import React, { useEffect, useLayoutEffect } from 'react';

import { LayoutThemeProvider } from './contexts'

import GlobalStyle from './styles/global';
import Layout from './components/Layout';


function App() {

  useEffect(() => {
    console.debug('useEffect disparado')
  }, [])

  useLayoutEffect(() => {
    console.debug('useLayoutEffect disparado')
  }, [])

  return (
    <LayoutThemeProvider>
      <GlobalStyle />
      <Layout />
    </LayoutThemeProvider>
  );
};

export default App;