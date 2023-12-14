import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Description = ({ props, setShow, show }) => {
    const handleClose = () => setShow(false);

    // Función para obtener la clase de estilo según la prioridad
    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'Alta':
                return 'text-danger'; // Rojo para prioridad alta
            case 'Media':
                return 'text-warning'; // Amarillo para prioridad media
            case 'Baja':
                return 'text-success'; // Verde para prioridad baja
            default:
                return '';
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <strong className={getPriorityColor(props.priority)}>Descripción:</strong>
                        <p>{props.description}</p>
                    </div>
                    <div>
                        <strong className={getPriorityColor(props.priority)}>Prioridad:</strong>
                        <p>{props.priority}</p>
                    </div>
                    <div>
                        <strong className={getPriorityColor(props.priority)}>Fecha de vencimiento:</strong>
                        <p>{props.dueDate}</p>
                    </div>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-between'>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary">Entendido</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export { Description };
