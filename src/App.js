import React from 'react'

import { Header, Post } from './components'

const posts = [
  {
    title: 'Título 01',
    subtitle: 'Subtítulo 01',
    likes: 20
  },
  {
    title: 'Título 02',
    subtitle: 'Subtítulo 02',
    likes: 10
  },
  {
    title: 'Título 03',
    subtitle: 'Subtítulo 03',
    likes: 50
  },
]

function App() {
  return (
    /**
     * React fragment in three ways:
     * <React.Fragment></React.Fragment>
     * <Fragment></Fragment>
     * <></>
    */
    <>
      <Header title="JStack's Blog">
        <h2>Posts da semana</h2>
      </Header>

      {posts.map(post => (
        <Post
          key={post.title}
          likes={post.likes}
          post={post}
        />
      ))}

    </>
  )
}

export default App