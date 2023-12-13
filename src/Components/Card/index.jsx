import Card from 'react-bootstrap/Card';
import { FaRegCheckCircle, FaCheckCircle } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const MyCard = ({ id ,title, priority, dueDate, onCompleted, onDelete, isCompleted }) => {
    return (
        <Card className="mb-3 shadow-sm" style={{ width: '15rem', cursor: 'default' }}>
            <Card.Body>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    {isCompleted ? (
                        <FaCheckCircle 
                            style={{ color: 'green' }}
                            onClick={() => onCompleted(id)}
                        />
                    ) : (
                        <FaRegCheckCircle 
                            style={{ color: 'green', cursor: 'pointer' }}
                            onClick={() => onCompleted(id)}
                            title="Marcar como completada"
                        />
                    )}
                    <RiDeleteBin5Line 
                        style={{ color: 'red', cursor: 'pointer' }}
                        onClick={() => onDelete(id)}
                        title="Eliminar tarea"
                    />
                </div>
                <Card.Title style={isCompleted ? { textDecoration: 'line-through', color: '#6c757d' } : {}}>
                    {title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    Prioridad: {priority}
                </Card.Subtitle>
                <Card.Text>
                    📆 Finalización: <span style={{ fontWeight: 'bold' }}>{dueDate}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export { MyCard };