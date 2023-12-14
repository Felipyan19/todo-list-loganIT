import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { TodoListContext } from '../../Context'
import { MyNavbar } from "../../Components/Navbar"
import { MyCard } from "../../Components/Card"
import { Button, Modal, Form } from 'react-bootstrap';
import { MyInput } from "../../Components/MyInput"
import { IoIosAdd } from "react-icons/io";

const Home = () => {
    const context = useContext(TodoListContext);
    const [showModal, setShowModal] = useState(false);
    const [completed, setCompleted] = useState(false);

    const floatingButtonStyle = {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        borderRadius: '50%',
        width: '56px', 
        height: '56px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '34px', 
    };
    

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
            context.setTodos(storedTodos);
        }
    }, [context.setTodos]);

    const handleAddClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append('completada', false);
        const formValues = Object.fromEntries(formData.entries());
        context.setTodos([...context.todos, formValues]);
        localStorage.setItem('todos', JSON.stringify([...context.todos, formValues]));

        setShowModal(false);
    };

    const onDelete = (index) => {
        const updatedTodos = context.todos.filter((todo, i) => i !== index);
        context.setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }

    const onComplete = (index) => {
        const updatedTodos = [...context.todos];
        updatedTodos[index] = {
            ...updatedTodos[index],
            isCompleted: !updatedTodos[index].isCompleted
        };
        context.setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    return (
        <>
            <MyNavbar />
            <MyInput />
            <div className="d-flex flex-wrap gap-4">
                {context.todos.map((todo, index) => (
                    <MyCard key={index} id={index} title={todo.Nombre} priority={todo.Prioridad} dueDate={todo.Fecha} onCompleted={onComplete} onDelete={onDelete} isCompleted={todo.completado} />
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
            </Modal >
        </>
    )
}

export { Home }