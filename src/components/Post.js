import React from "react"
import PropTypes from 'prop-types'
import { PostHeader } from "./"

export function Post({ post = {}, likes, onRemove }) {
  return (
    <>
      <article>
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
      <br/>
    </>
  )
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
}