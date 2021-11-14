import React, { useState, useEffect } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import {ItemList }from "../ItemList/ItemList";

export const ItemListConteiner = () => {
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])


    useEffect(() =>{
        setLoading(true)
        pedirDatos()
        .then((resp)=>{
            setProductos(resp)
        })
        .catch((err)=>{
            console.log(err)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    return(
       <>
            {
                loading 
                ? <h2>Cargando...</h2>
                : <ItemList productos={productos} />
            }
        </>
    )

}
