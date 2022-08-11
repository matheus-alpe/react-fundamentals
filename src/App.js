import React, { useEffect } from 'react';

import { LayoutThemeProvider } from './contexts'

import GlobalStyle from './styles/global';
import Layout from './components/Layout';


function App() {

  return (
    <LayoutThemeProvider>
      <GlobalStyle />
      <Layout />
    </LayoutThemeProvider>
  );
};

export default App;