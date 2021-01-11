import React , { useState } from "react"
import ItemListContainer from "./ItemListContainer"

const [contador, setContador] = useState(0);

const sumar = () =>{ setContador(contador + 1)}
const restar = () => { setContador(contador -1)}
const limpiar = () => { setContador(0)}

const ItemCount = ({contador,sumar,restar,limpiar}) =>{
    return(
        <>
    <div>
    <p>Contador : </p>
        <ItemCount contador={contador} sumar={sumar} restar={restar} limpiar={limpiar} />
        <button onClick={ () => { setContador(contador - 1) } }>-</button>
        <button onClick={ () => { setContador(contador + 1) } }>+</button>
        <button onClick={ () => { setContador(0) } }>Limpiar</button>
    </div>
    </>
    );
}

export default ItemCount;
