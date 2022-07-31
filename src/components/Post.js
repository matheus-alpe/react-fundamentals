import React from "react"
import PropTypes from 'prop-types'

export function Post({ post = {}, likes }) {
  return (
    <>
      <article>
        <h3>{post.title}</h3>
        <p>{post.subtitle}</p>
        <small>Média: {likes / 2}</small>
      </article>
      <br/>
    </>
  )
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
}