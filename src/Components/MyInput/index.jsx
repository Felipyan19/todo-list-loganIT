import React, { useState, useContext } from 'react';
import { Navbar, NavDropdown, InputGroup, FormControl, Button, Container, Form } from 'react-bootstrap';
import { IoSearch } from "react-icons/io5";
import { TodoListContext } from '../../Context';

const MyInput = () => {
    const context = useContext(TodoListContext);
    const { setSearch, todos } = context;
    const [searchTerm, setSearchTerm] = useState('');
    const [dropdownTitle, setDropdownTitle] = useState('Nombre');
    const [lastTerm, setLastTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        if (searchTerm !== lastTerm) {
            context.setTodos(JSON.parse(localStorage.getItem('todos')));
            setLastTerm('');
            setSearch(searchTerm);
        }

        if (searchTerm === '') {
            context.setTodos(JSON.parse(localStorage.getItem('todos')));
        } else {
            context.setTodos(todos.filter((todo) => todo[dropdownTitle].includes(searchTerm)));
        }
    };

    const handleDropdownChange = (eventKey, event) => {
        setDropdownTitle(event.target.text);
        setSearchTerm('');
    };

    const renderInputGroup = () => {
        if (dropdownTitle === 'Nombre') {
            return (
                <InputGroup className="mx-3 my-2">
                    <FormControl
                        type="search"
                        placeholder="Buscar..."
                        aria-label="Buscar"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <Button variant="outline-secondary" onClick={handleSearch}>
                        <IoSearch />
                    </Button>
                </InputGroup>
            );
        } else if (dropdownTitle === 'Prioridad') {
            return (
                <InputGroup className="mx-3 my-2">
                    <Form.Select aria-label="Prioridad" value={searchTerm} onChange={handleSearchChange}>
                        <option value="">Selecciona Prioridad</option>
                        <option value="Alta">Alta</option>
                        <option value="Media">Media</option>
                        <option value="Baja">Baja</option>
                    </Form.Select>
                    <Button variant="outline-secondary" onClick={handleSearch}>
                        <IoSearch />
                    </Button>
                </InputGroup>
            );
        } else if (dropdownTitle === 'Fecha') {
            return (
                <InputGroup className="mx-3 my-2">
                    <FormControl
                        type="date"
                        aria-label="Fecha"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <Button variant="outline-secondary" onClick={handleSearch}>
                        <IoSearch />
                    </Button>
                </InputGroup>
            );
        }
    };

    return (
        <Container>
            <Navbar className="my-3">
                {renderInputGroup()}

                <NavDropdown
                    title={dropdownTitle}
                    id="basic-nav-dropdown"
                    className="mx-3 my-2"
                    onSelect={handleDropdownChange}
                >
                    <NavDropdown.Item eventKey="1">Nombre</NavDropdown.Item>
                    <NavDropdown.Item eventKey="2">Prioridad</NavDropdown.Item>
                    <NavDropdown.Item eventKey="3">Fecha</NavDropdown.Item>
                </NavDropdown>
            </Navbar>
        </Container>
    );
};

export { MyInput };
