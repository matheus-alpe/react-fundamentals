import React, { useMemo } from 'react'
import { useParams, useLocation } from 'react-router-dom'

export default function Post() {
  const params = useParams()
  console.log(params)

  const { search } = useLocation()
  const queryParams = useMemo(() => new URLSearchParams(search), [search])
  console.log(queryParams.get('author'))
  
  return <h1>Post Page {params.id} - {queryParams.get('author')}</h1>
}
