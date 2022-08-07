import React from "react"
import PropTypes from 'prop-types'
import { Button } from "../Button"


export function PostHeader({ post,  onRemove }) {
  return (
    <h3>
      {post.read ? <s>{post.title}</s> : post.title} 
      <Button onClick={() => onRemove(post.id)}>
        Remover
      </Button>
    </h3>
  )
}

PostHeader.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
}