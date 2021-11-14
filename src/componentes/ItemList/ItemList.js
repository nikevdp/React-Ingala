import React from 'react';
import { Container} from 'react-bootstrap';
import { Item } from '../Item/Item.js';

export const ItemList = ({ productos }) => {

    return (
        <Container className="my-5" >
            <div>
                {productos.map((produ) => (
                   <Item produ={produ} />
                ))}
            </div>
        </Container>
    )
}
