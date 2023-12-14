import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoListContext } from '../../Context';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { FaUserCircle } from "react-icons/fa";

/**
 * Represents the navigation bar in a Todo List application,
 * using context for user state and providing a logout
 * functionality.
 */
const MyNavbar = () => {
  const context = useContext(TodoListContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    context.setIsLogIn(false);
    navigate('/login');
  };

  return (
    <Navbar className="bg-primary text-white justify-content-between">
      <Navbar.Brand href="https://docs-todo-list.vercel.app/" className='mx-4'>
        <h1 className="text-3xl font-bold text-white">
          Todo List
        </h1>
      </Navbar.Brand>
      <Nav className="ml-auto align-items-center mx-4">
        <FaUserCircle size={28} style={{ marginRight: '10px' }} />
        <Nav.Link className='text-white'>
          {context.valueinlogin.name}
        </Nav.Link>
        <Button variant="outline-light" onClick={handleLogout}>
          Salir
        </Button>
      </Nav>
    </Navbar>
  );
};

export { MyNavbar };
