import React from "react";
import { NavLink } from "react-router-dom"


function Item ({id, title, price, pictureUrl}){
    return(
        <>
        <div className="col s6 m4 l3">
            <div className="card">
                <div className="card-image">
                    <img src={pictureUrl} alt=""/>
                </div>
                <div className="card-content">
                    <span className="card-title-truncate">{title}</span>
                    <p>{price}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Item