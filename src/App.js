import React from 'react'

const category = 'Posts da semana'

function App() {
  return (
    /**
     * React fragment in three ways:
     * <React.Fragment></React.Fragment>
     * <Fragment></Fragment>
     * <></>
    */ 
    <>
      <h1>JStack's Blog</h1>
      <h2>{category}: {new Date().toLocaleDateString()}</h2>
    </>
  )
}

export default App