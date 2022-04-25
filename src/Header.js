import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";

function Header() {
    let user = JSON.parse(localStorage.getItem('user-info'))
    const navigate = useNavigate()

    function logOut() {
        localStorage.clear()
        navigate('/login')
    }

    return (
        <div>
            <Navbar bg="secondary" variant="dark">
                <Navbar.Brand style={({marginLeft: '50px'})}>Product Manager</Navbar.Brand>
                <Nav className="mr-auto navbar-wrapper">
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Link className="text-decoration-none text-white" to="/create">Create Product</Link>
                                <Link className="text-decoration-none text-white" to="/update">Update Product</Link>
                            </>
                            :
                            <>
                                <Link className="text-decoration-none text-white" to="/login">Login</Link>
                                <Link className="text-decoration-none text-white" to="/register">Register</Link>
                            </>
                    }
                </Nav>
                {localStorage.getItem('user-info') ?
                    <Nav className="ms-auto" style={({marginRight: '50px'})}>
                        <NavDropdown title={user && user.name}>
                            <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    : null
                }
            </Navbar>
        </div>
    )
}

export default Header