import React from 'react'
import { Route } from 'react-router-dom'

import Home from './pages/Home'
import Posts from './pages/Posts'

export default function Routes() {
  return (
    <>
      <Route
        path="/"
        exact
        component={Home}
      />

      <Route
        path="/posts"
        exact
        component={Posts}
      />
    </>
  )
}
