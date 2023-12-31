import React, { useState, useContext } from 'react';
import { Card, Button, Form, Container, Row, Col, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoListContext } from '../../Context';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { PiUserSquareDuotone } from "react-icons/pi";

const Login = () => {
    const context = useContext(TodoListContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const session = JSON.parse(localStorage.getItem('session'));
        if (session.usuario === context.valueinlogin.usuario && session.password === context.valueinlogin.password) {
            context.setIsLogIn(true);
            context.setValueinlogin({ ...context.valueinlogin, name: session.name });
            navigate('/Home');
        } else {
            alert('Credenciales incorrectas');
        }
    };

    return (
        <Container className="d-flex align-items-center h-100">
            <Container className="h-100 d-flex justify-content-center align-items-center">
                <Row className="text-center d-flex justify-content-center align-items-center">
                    <Col xs={12} md={6} className="mb-4 h-100">
                        <h1 className="mb-5 text-uppercase fw-bold text-primary text-3xl">Todo List</h1>
                        <h3 className="mb-5">Organiza tu día con facilidad</h3>
                        <p className="mt-2 text-secondary">
                            ¿Te gustaría ser más organizado y productivo en tu día a día? ¿Quieres tener una herramienta que te ayude a planificar, ejecutar y revisar tus tareas de forma fácil y rápida? Entonces, esta página es para ti.
                        </p>
                    </Col>
                    <Col xs={12} md={6} className=''>
                        <Card className="w-100 h-100 shadowrounded d-flex justify-content-center align-items-center">
                            <Card.Body className="w-75 my-5 d-flex flex-column justify-content-center align-items-center">
                                <PiUserSquareDuotone className='text-primary w-25 h-25 mb-4' />
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
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export { Login };
