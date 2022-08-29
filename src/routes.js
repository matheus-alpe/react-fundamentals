import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Posts from './pages/Posts'
import Post from './pages/Post'
import NotFound from './pages/NotFound'

export default function Routes() {
  return (
    <Switch>
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

      <Route
        path="/posts/:id"
        component={Post}
      />

      <Route component={NotFound} />
    </Switch>
  )
}
