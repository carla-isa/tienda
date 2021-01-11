import React from 'react';
import ItemCount from './ItemCount';

function ItemDetail( { id, title, details, price, stock, pictureUrl }) {
    return(
        <>
        <div>
            <h1>{title}</h1>
            <p>${price}</p>
            <img>{pictureUrl}</img>
            <p>{details}</p>
        </div>
        </>
    )
}