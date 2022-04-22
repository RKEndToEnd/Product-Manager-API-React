import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function signUp() {
        let item = {name, email, password}
        let result = await fetch("http://localhost:8000/api/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'apllication/json',
            }
        })
        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
        navigate('/create')
    }

    return (
        <div className="d-flex container align-items-center justify-content-center">
            <div className="card col-md-4">
                <div className="card-header bg-info opacity-75">
                    <h4>New account register</h4>
                </div>
                <div className="card-body">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)}
                                          placeholder="Enter username"/>
                            <Form.Text className="text-muted">
                                Username require minimum 3 signs.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                          placeholder="Enter email"/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                          placeholder="Password"/>
                            <Form.Text className="text-muted">
                                Password require minimum 8 signs.
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </div>
                <div className="card-footer bg-info opacity-75">
                    <Button onClick={signUp} variant="outline-secondary" type="submit">
                        Create new account
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Register