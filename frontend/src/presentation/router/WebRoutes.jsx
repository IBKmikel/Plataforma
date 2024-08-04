import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Contact, Blog, Courses, Post } from '../pages/web'
import { ClientLayout } from '../layouts'

export function WebRoutes () {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    )
  }
  return (
    <Routes>
      <Route path='/' element={loadLayout(ClientLayout, Home)} />
      <Route path='/courses' element={loadLayout(ClientLayout, Courses)} />
      <Route path='/contact' element={loadLayout(ClientLayout, Contact)} />
      <Route path='/blog' element={loadLayout(ClientLayout, Blog)} />
      <Route path='/blog/:path' element={loadLayout(ClientLayout, Post)} />
    </Routes>
  )
}
