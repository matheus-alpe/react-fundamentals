import React, { useState, createContext } from 'react'

import { ThemeProvider } from '../../contexts'
import { Header, Post, Button } from '..'

import { Title } from './styles'

function App() {

  const [posts, setPosts] = useState([
    {
      id: Date.now(),
      title: 'Título 01',
      subtitle: 'Subtítulo 01',
      likes: 20,
      read: false,
      removed: true
    },
    {
      id: Date.now() + 1,
      title: 'Título 02',
      subtitle: 'Subtítulo 02',
      likes: 30,
      read: true,
      removed: false
    },
  ])

  function handleRefresh() {
    setPosts((prevPostsState) => {
      const newPost = {
        id: Date.now(),
        title: `Título ${String(prevPostsState.length + 1).padStart(2, '0')}`,
        subtitle: `Subtítulo ${String(prevPostsState.length + 1).padStart(2, '0')}`,
        likes: 50,
        read: false,
        removed: false
      }

      return [...prevPostsState, newPost]
    })
  }

  function handleRemovePost(postId) {
    setPosts((prevPostsState) => prevPostsState.map(postState => {
      const post = {
        ...postState
      }

      if (postState.id === postId) {
        post.removed = true
      }

      return post
    }))
  }

  return (
    <ThemeProvider>
      <Header 
        title="JStack's Blog"
        
      >
        <Title as="h2">
          Posts da semana
          <Button onClick={handleRefresh}>Atualizar</Button>
        </Title>
      </Header>

      {posts.map(post => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}

    </ThemeProvider>
  )
}

export default App