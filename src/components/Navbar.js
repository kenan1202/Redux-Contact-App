import './Navbar.css';

import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <Link to = "/" className = "navLink">React Redux Contact App</Link>
        </nav>
    )
}

export default Navbar
