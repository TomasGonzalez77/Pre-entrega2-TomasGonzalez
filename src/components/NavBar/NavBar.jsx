import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <Link className={"nav"} to={'/'}>
                <h1>Todo Padel Online</h1>
            </Link>

            <nav>
                <ul>
                    <li>
                        <NavLink className={"nav"} to={`/categoria/paletas`}>
                            Paletas
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={"nav"} to={`/categoria/complementos`}>
                            Complementos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={"nav"} to={`/categoria/ropa`}>
                            Ropa
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={"nav"} to={`/categoria/zapatillas`}>
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