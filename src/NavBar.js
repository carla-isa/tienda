import React from 'react'
import CartWidget from './CartWidget'

function NavBar() {
    return (
        <>
        <nav>
            <h2>China Cocina</h2>
            <p>Home</p>
            <p>Sobre Nosotrxs</p>
            <p>Productos</p>
            <p>Mi Cuenta</p>
            <CartWidget/>
        </nav>
        </>
    )
}

export default NavBar
