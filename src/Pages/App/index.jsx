import { useState } from 'react'
import { useContext } from 'react'
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { TodoListContext, TodoListProvider } from '../../Context'
import { Home } from '../Home'
import { NotFound } from '../NotFound'
import { Login } from '../Login'
import './App.css'

const AppRoutes = () => {
  
  const context = useContext(TodoListContext)
  let routes = useRoutes([
    { path: '/Home', element: context.isLogIn ? <Home /> : <Navigate replace to={'/login'} /> },
    { path: '/login', element: <Login />  },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

function App() {
  localStorage.setItem('session', JSON.stringify({usuario: 'i@admin.com', password: 'password'}))
  return (
    <TodoListProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
   </TodoListProvider>
  )

}

export default App
