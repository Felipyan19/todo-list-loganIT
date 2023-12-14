import React, { useState, useContext } from 'react';
import { Navbar, NavDropdown, InputGroup, FormControl, Button, Container, Form } from 'react-bootstrap';
import { IoSearch } from "react-icons/io5";
import { TodoListContext } from '../../Context';

/**
 * `MyInput` is a functional React component that renders an input group
 * with a dropdown allowing the user to search and filter todos by name,
 * priority, or date. It uses context to manage and update the list of
 * todos based on the search criteria.
 *
 * @return {JSX.Element} The search input group within a container and
 * navbar for filtering todos.
 */
const MyInput = () => {
    const context = useContext(TodoListContext);
    const { setSearch, todos } = context;
    const [searchTerm, setSearchTerm] = useState('');
    const [dropdownTitle, setDropdownTitle] = useState('Nombre');
    const [lastTerm, setLastTerm] = useState('');

    /**
     * Updates the search term state based on user input.
     *
     * @param {object} event - The input event triggering the
     *                         change.
     * @return {void}
     */
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    /**
     * Triggers a search operation based on the search term. If the 
     * search term is different from the last term, it resets the 
     * last term and updates the search. It then filters the todos 
     * by the search term if it's not an empty string; otherwise, 
     * it resets to the original todos from localStorage.
     *
     * There are no parameters or return values as this function 
     * relies on and manipulates state within its scope.
     */
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

    /**
     * Handles the change event on a dropdown, updating
     * the title and resetting the search term.
     *
     * @param {string} eventKey - The key of the selected
     *                          dropdown item.
     * @param {Object} event - The event object containing
     *                       the target text.
     */
    const handleDropdownChange = (eventKey, event) => {
        setDropdownTitle(event.target.text);
        setSearchTerm('');
    };

    /**
     * Renders an input group based on the dropdownTitle state. 
     * If the dropdownTitle is 'Nombre', a text search input is 
     * rendered. If it's 'Prioridad', a priority select drop-down 
     * is rendered. If it's 'Fecha', a date picker is rendered.
     *
     * @return {JSX.Element} The input group element for the 
     *                       corresponding dropdownTitle value.
     */
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
