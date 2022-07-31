import React from "react"
import PropTypes from 'prop-types'

export function Post({ post = {}, likes, onRemove }) {
  return (
    <>
      <article>
        <h3>{post.title} <button onClick={() => onRemove(post.id)}>Remover</button></h3>
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
  }).isRequired,
}