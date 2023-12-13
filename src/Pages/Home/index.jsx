import React, { useState } from 'react';
import { useContext } from 'react';
import { TodoListContext } from '../../Context'
import { MyNavbar } from "../../Components/Navbar"
import { MyCard } from "../../Components/Card"
import { Navbar, NavDropdown, InputGroup, FormControl, Button, Modal, Form } from 'react-bootstrap';
import { IoSearch } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
const MyInput = () => {
    return (
        <Navbar className="my-3">
            <InputGroup className="mx-3 my-2">
                <FormControl
                    type="search"
                    placeholder="Buscar..."
                    aria-label="Buscar"
                />
                <Button variant="outline-secondary">
                    <IoSearch />
                </Button>
            </InputGroup>
            <NavDropdown title="Categorías" id="basic-nav-dropdown" className="mx-3 my-2">
                <NavDropdown.Item href="#action/3.1">Nombre</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Prioridad</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Fecha</NavDropdown.Item>
            </NavDropdown>
        </Navbar>
    )
}
const Home = () => {
    const context = useContext(TodoListContext);
    const [showModal, setShowModal] = useState(false);
    const [completed, setCompleted] = useState(false);

    const handleAddClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append('isCompleted', false);
        const formValues = Object.fromEntries(formData.entries());
        const jsonData = JSON.stringify(formValues);
        console.log(jsonData); 
        context.setTodos([...context.todos, formValues]);
        setShowModal(false);
    };



    const onDelete = (index) => {
        context.setTodos(context.todos.filter((todo, i) => i !== index));
    }
    const onComplete = (index) => {
        context.setTodos(
            context.todos[index].isCompleted = !context.todos[index].isCompleted
        )
    };

    return (
        <>
            <MyNavbar />
            <MyInput />
            <div className="d-flex flex-wrap gap-4">
                {context.todos.map((todo, index) => (
                    <MyCard key={index} id={index} title={todo.title} priority={todo.priority} dueDate={todo.dueDate} onCompleted={onComplete} onDelete={onDelete} isCompleted={todo.isCompleted} />
                ))}
            </div>

            <Button style={floatingButtonStyle} variant="primary" onClick={handleAddClick}>
                <IoIosAdd />
            </Button>

            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Añadir nueva tarea</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Label>Título</Form.Label>
                            <Form.Control type="text" placeholder="Título" name="title" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDescription">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control as="textarea" rows={3} name="description" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPriority">
                            <Form.Label>Prioridad</Form.Label>
                            <Form.Select name="priority" aria-label="Prioridad">
                                <option value="">Seleccione</option>
                                <option value="Alta">Alta</option>
                                <option value="Media">Media</option>
                                <option value="Baja">Baja</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDueDate">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type="date" name="dueDate" placeholder="Fecha de vencimiento" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Guardar cambios
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal >
        </>
    )
}

// Inline style for the floating button
const floatingButtonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    borderRadius: '50%',
    width: '56px', // Set a specific size for your floating button
    height: '56px', // Set a specific size for your floating button
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '34px', // Icon size
};

export { Home }