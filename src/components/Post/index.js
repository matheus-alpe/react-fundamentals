import React from 'react'
import PropTypes from 'prop-types'
import { PostHeader } from './PostHeader'

import styles from './Post.scss'
import { Subtitle, Likes } from './styles'

export function Post({ post = {}, likes, onRemove }) {
  return (
    <article
      className={
        post.removed
        ? styles.removed
        : styles.post
      }
    >
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
    </article>
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