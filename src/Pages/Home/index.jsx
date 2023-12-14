import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { TodoListContext } from '../../Context';
import { MyNavbar } from '../../Components/Navbar';
import { MyCard } from '../../Components/Card';
import { Button, Container } from 'react-bootstrap';
import { MyInput } from '../../Components/MyInput';
import AddTodoModal from '../../Components/AddTodo';
import { MdOutlinePlaylistAdd } from "react-icons/md";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Toast from 'react-bootstrap/Toast';

const Home = () => {
    const context = useContext(TodoListContext);
    const [showModal, setShowModal] = useState(false);
    const [beforeTime, setBeforeTime] = useState(false);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
            context.setTodos(storedTodos);
        }
    }, [context.setTodos]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setBeforeTime(true);
        }, 3000);
    }, [])


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
        const updatedTodos = [...context.todos, formValues];
        context.setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));

        setShowModal(false);
    };

    const onDelete = (index) => {
        const updatedTodos = context.todos.filter((_, i) => i !== index);
        context.setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    const onComplete = (index) => {
        const updatedTodos = context.todos.map((todo, i) => (i === index ? { ...todo, completado: !todo.completado } : todo));
        context.setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        setShowToast(true);
    };

    const totalTodos = context.todos.length;
    const completedTodos = context.todos.filter((todo) => todo.completado).length;

    return (
        <>
            <MyNavbar />
            <MyInput />
            {beforeTime && <Container className="text-center m-4">
                <div className="d-flex flex-wrap gap-5">
                    {context.todos.map((todo, index) => (
                        <MyCard
                            key={index}
                            id={index}
                            title={todo.Nombre}
                            priority={todo.Prioridad}
                            dueDate={todo.Fecha}
                            onCompleted={onComplete}
                            onDelete={onDelete}
                            isCompleted={todo.completado}
                            description={todo.description}
                        />
                    ))}
                </div>

                <Button
                    style={{
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
                    }}
                    variant="primary"
                    onClick={handleAddClick}
                >
                    <MdOutlinePlaylistAdd />

                </Button>

                <div className="bg-primary" style={{
                    position: 'fixed',
                    bottom: '21px',
                    left: '20px',
                    padding: '8px',
                    borderRadius: '8px',
                    color: '#fff',
                    fontWeight: 'bold',
                }}>
                    <span> Total: {totalTodos}</span>
                    <span className="ms-3">Completados: {completedTodos}</span>
                </div>

                <AddTodoModal showModal={showModal} handleClose={handleClose} handleSubmit={handleSubmit} />
            </Container> ||
                <Container>
                    <Skeleton count={15} height={"45px"} />
                </Container>
            }
            {context.todos.length === 0 && (
                <div className="d-flex flex-column align-items-center justify-content-center h-50">
                    <h1 className="text-primary">No hay tareas pendientes</h1>
                    <h2>! Por favor agrega una ¡</h2>

                </div>
            )}
            <Toast style={{
                position: 'fixed',
                bottom: '19px',
                right: '18px',
                padding: '8px',
                borderRadius: '8px',
                color: '#fff',
                fontWeight: 'bold',
            }}
                bg={"success"}
                onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Todo List</strong>
                    <small>Hace un momento</small>
                </Toast.Header>
                <Toast.Body>Tarea completada, ¡ Excelente !</Toast.Body>
            </Toast>
        </>
    );
};

export { Home };
