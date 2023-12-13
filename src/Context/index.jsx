import { createContext, useState, useEffect  } from 'react'
import { Link, Navigate } from 'react-router-dom'

export const TodoListContext = createContext()


const TodoListProvider = ({children}) => {
    
const [isLogIn, setIsLogIn] = useState(false)
const [valueinlogin, setValueinlogin] = useState({})
const [todos, setTodos] = useState([])


    return (
        <TodoListContext.Provider value={{
            isLogIn,
            setIsLogIn,
            valueinlogin,
            setValueinlogin,
            todos,
            setTodos
        }}>
            {children}
        </TodoListContext.Provider>
    )
}

export { TodoListProvider }