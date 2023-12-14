import Card from 'react-bootstrap/Card';
import { FaRegCheckCircle, FaCheckCircle } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Description } from '../Description';
import { useState } from 'react';


const MyCard = (props) => {

    const [show, setShow] = useState(false);

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'Alta':
                return 'text-danger';
            case 'Media':
                return 'text-warning';
            case 'Baja':
                return 'text-success';
            default:
                return '';
        }
    };

    return (
        <Card
            className="mb-3 shadow-sm p-4"
            style={{ cursor: 'pointer' }}
            onClick={() => {
                setShow(!show);
            }}
        >
            <Card.Body>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    {props.isCompleted ? (
                        <FaCheckCircle
                            style={{ color: 'green' }}
                            onClick={(e) => {
                                e.stopPropagation();
                                props.onCompleted(props.id)
                            }}
                        />
                    ) : (
                        <FaRegCheckCircle
                            style={{ color: 'green', cursor: 'pointer' }}
                            onClick={(e) => {
                                e.stopPropagation()
                                props.onCompleted(props.id)
                            }}
                            title="Marcar como completada"
                        />
                    )}
                    <RiDeleteBin5Line
                        style={{ color: 'red', cursor: 'pointer' }}
                        onClick={() => props.onDelete(props.id)}
                        title="Eliminar tarea"
                    />
                </div>
                <Card.Title style={props.isCompleted ? { textDecoration: 'line-through', color: '#6c757d' } : {}}>
                    {props.title}
                </Card.Title>
                <Card.Subtitle className="m-4 text-muted">
                    <strong className={getPriorityColor(props.priority)}>Prioridad:</strong>
                    <p>{props.priority}</p>
                </Card.Subtitle>
                <Card.Text className='m-2'>
                    📆 Finalización: <span style={{ fontWeight: 'bold' }}>{props.dueDate}</span>
                </Card.Text>
            </Card.Body>
            {show && (
                <Description props={props} setShow={setShow} show={show} />
            )}
        </Card>
    );
}

export { MyCard };
