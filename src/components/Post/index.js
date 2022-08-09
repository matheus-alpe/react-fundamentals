import React from 'react'
import PropTypes from 'prop-types'
import { PostHeader } from './PostHeader'

import { Container, Subtitle, Likes } from './styles'

export function Post({ post = {}, likes, onRemove }) {
  return (
    <Container removed={post.removed}>
      <PostHeader
        onRemove={onRemove}
        post={{
          id: post.id,
          title: post.title,
          read: post.read
        }}
      />
      <Subtitle>{post.subtitle}</Subtitle>
      <Likes>Curtidas: {post.likes}</Likes>
    </Container>
  )
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired,
}