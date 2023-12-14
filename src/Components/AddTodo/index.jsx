import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const AddTodoModal = ({ showModal, handleClose, handleSubmit }) => {
    return (
        <Modal show={showModal} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Añadir nueva tarea</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formTitle">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Título" name="Nombre" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control as="textarea" rows={3} name="description" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPriority">
                        <Form.Label>Prioridad</Form.Label>
                        <Form.Select name="Prioridad" aria-label="Prioridad">
                            <option value="">Seleccione</option>
                            <option value="Alta">Alta</option>
                            <option value="Media">Media</option>
                            <option value="Baja">Baja</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDueDate">
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control type="date" name="Fecha" placeholder="Fecha de vencimiento" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Guardar cambios
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AddTodoModal;
