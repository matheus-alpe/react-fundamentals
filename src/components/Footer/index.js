import React from 'react';

import { Container } from './styles';

import ThemeSwitcher from '../ThemeSwitcher'

export default function Footer() {
  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <ThemeSwitcher />
    </Container>
  );
}