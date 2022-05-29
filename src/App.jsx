import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Blog from './pages/Blog/Blog'
import Home from './pages/Home'
import Landing from './pages/Landing/Landing'

const App = () => {
  const routes = [
    {
      path: "/", 
      element: <Home />
    },
    {
      path: "/landing", 
      element: <Landing />
    },
    {
      path: "/blog", 
      element: <Blog />
    },
  ]

  return (
    <div>
      <Routes>
        { routes.map((route, index) => <Route key={`${index}`} path={route.path} element={route.element}  />) }
      </Routes>
    </div>
  )
}

export default App
