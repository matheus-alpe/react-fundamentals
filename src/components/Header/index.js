import React, { useContext } from 'react';
import { Container } from './styles';

import ThemeSwitcher from '../ThemeSwitcher'

export default function Header() {
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <ThemeSwitcher />
    </Container>
  );
}