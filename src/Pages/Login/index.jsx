import React, { useState, useContext } from 'react';
import { Card, Button, Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoListContext } from '../../Context';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { InputGroup } from 'react-bootstrap';
import { PiUserSquareDuotone } from "react-icons/pi";

/**
 * Renders the login component, provides UI for user
 * authentication, and navigates to the home page upon
 * successful login.
 */
const Login = () => {
    const context = useContext(TodoListContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    /**
     * Toggles the state of password visibility.
     */
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    /**
     * Handles the form submission event by preventing the default
     * form submission, checking if the current session matches the
     * context's valueinlogin, and navigating to the home page if
     * the credentials are correct, otherwise alerts the user.
     *
     * @param {Event} event - The event object from the form submit.
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        const session = localStorage.getItem('session');
        if (session === JSON.stringify(context.valueinlogin)) {
            context.setIsLogIn(true);
            navigate('/Home');
        } else {
            alert('Credenciales incorrectas');
        }
    };

    return (
        <Container className="d-flex align-items-center h-100">
            <Container className="h-100 d-flex justify-content-center align-items-center">
                <Container className="text-center">
                    <h1 className="mb-5 text-uppercase fw-bold text-primary text-3xl">Todo List</h1>
                    <h3 className="mb-5">Organiza tu día con facilidad</h3>
                    <p className="mt-2 text-secondary">
                    ¿Te gustaría ser más organizado y productivo en tu día a día? ¿Quieres tener una herramienta que te ayude a planificar, ejecutar y revisar tus tareas de forma fácil y rápida? Entonces, esta página es para ti. 
                    </p>
                </Container>
                <Card className="w-100 h-75 shadow rounded d-flex justify-content-center align-items-center">
                    <Card.Body className="w-75 d-flex flex-column justify-content-center align-items-center">
                        <PiUserSquareDuotone className='text-primary w-25 h-25 mb-4'/>
                        <Form onSubmit={handleSubmit} className="w-100">
                            <Form.Group className="mb-4" controlId="Email">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Usuario@"
                                    onChange={(e) => context.setValueinlogin({ ...context.valueinlogin, usuario: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="Password">
                                <Form.Label>Contraseña</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Contraseña"
                                        onChange={(e) => context.setValueinlogin({ ...context.valueinlogin, password: e.target.value })}
                                    />
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={toggleShowPassword} style={{ cursor: 'pointer' }} />
                                    </InputGroup.Text>
                                </InputGroup>
                            </Form.Group>

                            <div className="d-grid gap-2">
                                <Button variant="primary" size="lg" type="submit">
                                    Iniciar
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
    );
};

export { Login };
