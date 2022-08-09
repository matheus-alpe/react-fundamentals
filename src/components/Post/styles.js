import styled, { css } from 'styled-components'

export const Container = styled.article`
  margin-bottom: 40px;

  ${({ removed }) => css`
    opacity: ${removed ? .5 : 1 };
    color: ${removed ? '#f00' : '#fff'};
  `}
`

export const Subtitle = styled.small`
  display: block;
`

export const Likes = styled.span`
  font-size: 10px;
  opacity: .7;
`