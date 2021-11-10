
import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import "./ItemCount.css";



export const ItemCount = () => {

    const [cantidad, setCantidad] = useState(0);
    const valor = ("Precio $ " + 250 * cantidad);
    const sumar = () => {
        setCantidad(cantidad + 1)
    }
    const restar = () => {
        setCantidad(cantidad - 1)
    }
    return (
        <div className="ItemCount">
            <asside  className="contador">
            <p>Cantidad</p>
            <div>
                <Button onClick={sumar} variant="light"><BsChevronUp></BsChevronUp></Button>
                <div> {cantidad} </div>
                <Button onClick={restar} variant="light"><BsChevronDown></BsChevronDown></Button>
            </div>
            </asside>
            <p>{valor} </p>
        </div >
    )
}
