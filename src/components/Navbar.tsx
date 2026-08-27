import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Navbar() {
    const {logout , user} = useAuth()
    return (
        <nav>
            <Link to="/">
                Home
            </Link>

            <Link to="/products">
                Products
            </Link>
            {user ? (
                <button onClick={logout}>
                Logout
                </button>

            ): (
                <Link to="/login">
                Login
            </Link>
            )}
            
            
        </nav>
    )
}

export default Navbar