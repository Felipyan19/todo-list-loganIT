import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { TodoListContext } from '../../Context'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { FaUserCircle } from "react-icons/fa"; // Using FaUserCircle from FontAwesome

const MyNavbar = () => {
  const context = useContext(TodoListContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    context.setIsLogIn(false); 
    navigate('/login'); 
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="Home">Todo-List</Navbar.Brand>
        <Nav className="ml-auto align-items-center">
          <FaUserCircle size={28} style={{ marginRight: '10px' }} />
          <Nav.Link href="#login">{context.valueinlogin.usuario}</Nav.Link>
          <Button variant="outline-secundary" onClick={handleLogout}>Salir</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export { MyNavbar };