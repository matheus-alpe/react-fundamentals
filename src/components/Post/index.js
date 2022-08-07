import React from 'react'
import PropTypes from 'prop-types'
import { PostHeader } from './PostHeader'

import styles from './Post.scss'

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
      <p>{post.subtitle}</p>
      <small>Curtidas: {post.likes}</small>
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