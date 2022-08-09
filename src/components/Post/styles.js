import styled from 'styled-components'

export const Container = styled.article`
  margin-bottom: 40px;
  opacity: ${(props) => props.removed ? .5 : 1 };
  color: ${(props) => props.removed ? '#f00' : '#fff' };
`

export const Subtitle = styled.small`
  display: block;
`

export const Likes = styled.span`
  font-size: 10px;
  opacity: .7;
`