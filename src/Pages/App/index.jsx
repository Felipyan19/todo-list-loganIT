import { useContext } from 'react'
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { TodoListContext, TodoListProvider } from '../../Context'
import { Home } from '../Home'
import { NotFound } from '../NotFound'
import { Login } from '../Login'

/**
 * Defines the routing structure for the application based on the
 * authentication status from the TodoListContext.
 *
 * @return {JSX.Element} The routes to render, depending on login status.
 */
const AppRoutes = () => {
  
  const context = useContext(TodoListContext)
  let routes = useRoutes([
    { path: '/', element: context.isLogIn ? <Home /> : <Navigate replace to={'/login'} /> },
    { path: '/Home', element: context.isLogIn ? <Home /> : <Navigate replace to={'/login'} /> },
    { path: '/login', element: <Login />  },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

/**
 * Initializes the application, sets user session in local storage,
 * and renders the main routes wrapped in the TodoListProvider and
 * BrowserRouter.
 *
 * @return {JSX.Element} The root component of the application.
 */
function App() {
  localStorage.setItem('session', JSON.stringify({usuario: 'AndresDev@admin.com', password: 'password', name: 'Andres Dev'}))
  return (
    <TodoListProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
   </TodoListProvider>
  )

}

export default App
