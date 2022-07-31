import React from 'react'

import { Header, Post } from './components'


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

      <Post
        likes={20}
        post={{
          title: 'Títuilo 01',
          subtitle: 'Subtítulo 01'
        }}
      />

      <Post
        post={{
          title: 'Títuilo 02',
          subtitle: 'Subtítulo 02'
        }}
      />

      <Post />
    </>
  )
}

export default App