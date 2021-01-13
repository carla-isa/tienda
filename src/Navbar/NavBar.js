import React from 'react';
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css';
import {NavLink} from 'react-router-dom'


const NavBar = () => {

    return (
        <>  
            <nav id='nav'>
                <div className="nav-wrapper">
                    <NavLink to="/" exact className="brand-logo">Plantitas</NavLink>
                    <a href="/#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <NavLink to="/categories/interior" className="navlink"> Interior </NavLink>
                        </li>
                        <li>
                            <NavLink to="/categories/exterior" className="navlink"> Exterior </NavLink>
                        </li>
                        <li>
                            <NavLink to="/nosotros" className="navlink"> Nosotros </NavLink>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li>
                    <NavLink to="/" className="navlink"> Interior </NavLink>
                </li>
                <li>
                    <NavLink to="/micuenta" className="navlink"> Exterior </NavLink>
                </li>
                <li>
                    <NavLink to="/nosotros" className="navlink"> Nosotros </NavLink>
                </li>
            </ul>
        </>
    )
};
export default NavBar;