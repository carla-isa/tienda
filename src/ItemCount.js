import React , { useState } from "react"
import ItemListContainer from "./ItemListContainer"

const ItemCount = ({contador,sumar,restar,limpiar}) =>{
    return(
        <>
    <div>
        <p>Contador : {contador}</p>
        <button onClick={ () => { setContador(contador - 1) } }>-</button>
        <button onClick={ () => { setContador(contador + 1) } }>+</button>
        <button onClick={ () => { setContador(0) } }>Limpiar</button>
    </div>
    </>
    );
}

export default ItemCount;
