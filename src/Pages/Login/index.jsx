import React, { useState, useContext, useEffect } from 'react';
import { Card, Button, Form, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoListContext } from '../../Context';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { InputGroup } from 'react-bootstrap';


const Login = () => {
    const context = useContext(TodoListContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

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
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
            <Card className="shadow-sm" style={{ minWidth: "300px", maxWidth: "400px", width: "100%" }}>
                <Card.Body>
                    <Card.Title className="text-center mb-5">Todo List</Card.Title>
                    <Form onSubmit={handleSubmit}>
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
    );
};

export { Login };