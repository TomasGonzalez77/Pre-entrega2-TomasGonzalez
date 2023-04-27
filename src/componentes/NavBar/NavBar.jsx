import React from 'react'
import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <header>
            <h1>Tienda de padel Online</h1>

            <nav>
                <ul>
                    <li>Paletas</li>
                    <li>Zapatillas</li>
                    <li>Complementos</li>
                </ul>
            </nav>

            <CardWidget />
        </header>

    )
}

export default NavBar