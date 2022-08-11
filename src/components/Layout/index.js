import React from 'react';
import { useTheme } from 'styled-components'

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout({ onToggleTheme, selectedTheme }) {
  const theme = useTheme()

  return (
    <>
      <Header
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
      <PostsList />
      <Footer
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />

      <div 
        style={{
          marginTop: theme.spacing.large,
          backgroundColor: theme.footerBackgroundColor,
          padding: theme.spacing.large
        }}
      >
        oi, tudo bem?
      </div>
    </>
  );
}