import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ItemCount.css'

const ItemCount = ({ add, setAdd, initial, stock }) => {

    if(stock === 0){ initial = "Sin stock"}

    const [ counter, setCounter ] = useState(initial);

    const removeItem = () => setCounter(counter -1);
    const addItem = () => setCounter(counter + 1);

    const onAdd = () => {
        setAdd(counter)
    }

    console.log(add)
    if ( add === undefined ){
        
        return (
            <>  
                <div className="item-counter">
    
                    <div className="counter-container">
    
                        <button onClick = { removeItem } className="waves-effect waves-light btn counter-btn" disabled={ counter <= initial }><p>-</p></button>
                        <p className="counter-value" >{counter}</p>
                        <button onClick = { addItem } className="waves-effect waves-light btn counter-btn" disabled={ counter >= stock }><p>+</p></button>
                        
                    </div>
    
                    <button onClick={ onAdd } className="waves-effect btn">Agregar al carrito</button>
                </div>
            </>
        )
    } else {
        return(
            <>  
            <div className="go-cart">
                <Link to="/cart" className="waves-effect btn">
                    Terminar compra<i className="material-icons cart">shopping_cart</i>
                </Link>
            </div>
        </>
        )
    }
}
export default ItemCount
