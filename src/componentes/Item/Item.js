import { Card, Button } from 'react-bootstrap';
import { ItemCount } from "./../ItemCount/ItemCount.js"


export const Item = ({ produ }) => {
    return (
        <div>
            <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={produ.img} alt={produ.producto} />
                <Card.Body>
                    <Card.Title>{produ.producto}</Card.Title>
                    <h3>{produ.precio}</h3>
                    <Card.Text>{produ.desc}</Card.Text>
                    <ItemCount />
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
        </div>
    )
}