import React from "react"

export function Post({ post = {}, likes }) {
  return (
    <>
      <article>
        <h3>{post.title}</h3>
        <small>{post.subtitle}</small>
        Média: {likes / 2}
      </article>
      <br/>
    </>
  )
}