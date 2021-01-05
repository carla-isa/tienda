import React, {useState} from 'react'
import ItemCount from "./ItemCount"

export default function ItemListContainer(){
    const [contador, setContador] = useState(0);

    const sumar = () =>{ setContador(contador + 1)}
    const restar = () => { setContador(contador -1)}
    const limpiar = () => { setContador(0)}

    return(
        <>
        <div>Hola, bienvenidx a la tienda!</div>
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
