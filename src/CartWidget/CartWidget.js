import React from 'react'
import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <>  
            <Link to="/cart" className = "cart-container">
                <a href="#asd"> <i className="material-icons">shopping_cart</i> </a>
            </Link>
        </>
    )
}
export default CartWidget