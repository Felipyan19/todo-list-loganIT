import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container>
            <Row className="d-flex justify-content-center align-items-center mt-5 h-100">
                <Col xs={12} md={8} >

                        <h1 className="text-center">404 -Perdona</h1> 
                        <p className="text-center"> la url es incorrecta intenta con otra opcion.</p>
                        <a href="/" className='btn btn-outline-primary text-center w-100'>Home</a>
                </Col>
            </Row>
        </Container>
    );
};


export { NotFound }