import { createContext, useState, useEffect  } from 'react'
import { Link, Navigate } from 'react-router-dom'

export const TodoListContext = createContext()


/**
 * Provides context for a TodoList including state for login
 * status, login values, todo items, and search term. Wraps
 * child components with TodoListContext.Provider.
 *
 * @param {object} props - Contains children components.
 * @return {JSX.Element} A TodoListContext.Provider component
 *                       wrapping children.
 */
const TodoListProvider = ({children}) => {
    
const [isLogIn, setIsLogIn] = useState(false)
const [valueinlogin, setValueinlogin] = useState({})
const [todos, setTodos] = useState([])
const [search, setSearch] = useState('');


    return (
        <TodoListContext.Provider value={{
            isLogIn,
            setIsLogIn,
            valueinlogin,
            setValueinlogin,
            todos,
            setTodos,
            search,
            setSearch
        }}>
            {children}
        </TodoListContext.Provider>
    )
}

export { TodoListProvider }