import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Navbar() {
    const {logout} = useAuth()
    return (
        <nav>
            <Link to="/">
                Home
            </Link>

            <Link to="/products">
                Products
            </Link>

            <Link to="/login">
                Login
            </Link>
            <button onClick={logout}>
                Logout
            </button>
        </nav>
    )
}

export default Navbar