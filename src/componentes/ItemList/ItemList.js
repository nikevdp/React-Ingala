import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {ItemCount} from "./../ItemCount/ItemCount.js"
import "./ItemList.css"
import img from ".././imagenes/papasjpg.jpg"

const ItemList = ({ producto, precio }) => {

    return (

        <Card className="productos" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{producto}</Card.Title>
                <Card.Text>
                    {precio}
                </Card.Text>
                <ItemCount/>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>

    )
}
export default ItemList