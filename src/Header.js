import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div>
            <Navbar bg="secondary" variant="dark">
                <Navbar.Brand>Navbar</Navbar.Brand>
                <Nav className="mr-auto navbar-wrapper">
                    <Link className="text-decoration-none text-white" to="/create">Create Product</Link>
                    <Link className="text-decoration-none text-white" to="/update">Update Product</Link>
                    <Link className="text-decoration-none text-white" to="/login">Login</Link>
                    <Link className="text-decoration-none text-white" to="/register">Register</Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header