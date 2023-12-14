import { useState, useContext } from 'react';
import { Navbar, NavDropdown, InputGroup, FormControl, Button } from 'react-bootstrap';
import { IoSearch } from "react-icons/io5";
import { TodoListContext } from '../../Context';


const MyInput = () => {

    const context = useContext(TodoListContext);

    const { setSearch } = useContext(TodoListContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [dropdownTitle, setDropdownTitle] = useState('Categorías');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setSearch(event.target.value);
    };

    const handleSearchClick = () => {
        setSearch(searchTerm);
        const dropdownTitleValue = dropdownTitle 
        if(searchTerm === '') {
            setDropdownTitle('Categorías');
            context.setTodos(JSON.parse(localStorage.getItem('todos')));
        }else{
            context.setTodos(context.todos.filter((todo) => todo.Prioridad.includes(searchTerm)));
        }
    };

    const handleSelectCategory = (eventKey, event) => {
        const selectedTitle = event.target.text;
        setDropdownTitle(selectedTitle);
        
    };

    return (
        <Navbar className="my-3">
            <InputGroup className="mx-3 my-2">
                <FormControl
                    type="search"
                    placeholder="Buscar..."
                    aria-label="Buscar"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <Button variant="outline-secondary" onClick={handleSearchClick}>
                    <IoSearch />
                </Button>
            </InputGroup>
            <NavDropdown
                title={dropdownTitle}
                id="basic-nav-dropdown"
                className="mx-3 my-2"
                onSelect={handleSelectCategory}
            >
                <NavDropdown.Item eventKey="1" >Nombre</NavDropdown.Item>
                <NavDropdown.Item eventKey="2" >Prioridad</NavDropdown.Item>
                <NavDropdown.Item eventKey="3" >Fecha</NavDropdown.Item>
            </NavDropdown>
        </Navbar>
    );
};

export { MyInput };