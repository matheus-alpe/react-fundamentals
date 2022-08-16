import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { Container } from './styles';

export default class Post extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }

  render() {
    const { title, description } = this.props

    return (
      <Container>
        <h2>{title}</h2>
        <small>{description}</small>
      </Container>
    )
  }
}
