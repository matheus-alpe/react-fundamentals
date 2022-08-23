import styled from 'styled-components'

export const Nav = styled.nav`
  background: ${({ theme }) => theme.navBackgroundColor};
  margin-top: ${({ theme }) => theme.spacing.medium + 'px'};
  padding: ${({ theme }) => theme.spacing.medium + 'px'};
  border-radius: ${({ theme }) => theme.borderRadius};

  a {
    text-decoration: none;
    color: inherit;
    display: inline-block;

    & + a {
      margin-left: ${({ theme }) => theme.spacing.medium + 'px'};
    }
  }
`
