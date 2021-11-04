import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import "./ItemList.css"
const ItemList = ({ producto, precio }) => {
    return (

        <Card className="productos" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{producto}</Card.Title>
                <Card.Text>
                    {precio}
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>

    )
}
export default ItemList