import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"



const NavBar = () => {
    const imgTD = "https://tomasgonzalez77.github.io/tomasgonzalez-proyectofinal/image/dondequiero.png";
    return (
        <header>
            <Link to={"/"}>
                <img className="imgTD" src={imgTD} alt="Logo Todo Padel" />
            </Link>
    
            <nav>
                <ul className="nav-list">
                    <li>
                        <NavLink className="nav" activeClassName="active" to={`/categoria/paletas`}> Paletas </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav" activeClassName="active" to={`/categoria/complementos`}> Complementos </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav" activeClassName="active" to={`/categoria/ropa`}> Ropa </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav" activeClassName="active" to={`/categoria/zapatillas`}> Zapatillas </NavLink>
                   </li>

                </ul>
            </nav>

            <CartWidget className="imgCarrito"/>

        </header>
    )
}



export default NavBar