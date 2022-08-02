import React, { useState } from 'react'

import { Header, Post } from './components'


function App() {
  const [posts, setPosts] = useState([
    {
      id: Date.now(),
      title: 'Título 01',
      subtitle: 'Subtítulo 01',
      likes: 20,
      read: false
    },
    {
      id: Date.now() + 1,
      title: 'Título 02',
      subtitle: 'Subtítulo 02',
      likes: 30,
      read: true
    },
  ])

  function handleRefresh() {
    setPosts((prevPostsState) => {
      const newPost = {
        id: Date.now(),
        title: `Título ${String(prevPostsState.length + 1).padStart(2, '0')}`,
        subtitle: `Subtítulo ${String(prevPostsState.length + 1).padStart(2, '0')}`,
        likes: 50,
        read: false
      }

      return [...prevPostsState, newPost]
    })
  }

  function handleRemovePost(postId) {
    setPosts((prevPostsState) => prevPostsState.filter(postState => postState.id !== postId))
  }

  return (
    <>
      <Header title="JStack's Blog">
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      {posts.map(post => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}

    </>
  )
}

export default App