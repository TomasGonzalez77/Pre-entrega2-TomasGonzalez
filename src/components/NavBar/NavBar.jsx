import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <Link to={'/'}>
                <h1>Tienda de padel Online</h1>
            </Link>

            <nav>
                <ul>
                    <li>
                        <NavLink to={`/categoria/paletas`}>
                            Paletas
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/categoria/complementos`}>
                            Complementos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/categoria/zapatillas`}>
                            Zapatillas
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <CardWidget />
        </header >

    )
}

export default NavBar