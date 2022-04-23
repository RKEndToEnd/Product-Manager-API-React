import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Header from "./Header";

function Register() {

    useEffect(() => {
        if (localStorage.getItem('user-info')){
            navigate('/create')
        }
    }, [])

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
        <>
            <Header/>
            <div className="d-flex container align-items-center justify-content-center" style={({marginTop: '30px'})}>
                <div className="card col-md-4">
                    <div className="card-header bg-info opacity-75">
                        <h6>New account register</h6>
                    </div>
                    <div className="card-body">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)}
                                              placeholder="Enter username" size="sm"/>
                                <Form.Text className="text-muted">
                                    Username require minimum 3 signs.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                              placeholder="Enter email" size="sm"/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={password}
                                              onChange={(e) => setPassword(e.target.value)}
                                              placeholder="Password" size="sm"/>
                                <Form.Text className="text-muted">
                                    Password require minimum 8 signs.
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </div>
                    <div className="card-footer bg-info opacity-75">
                        <Button onClick={signUp} variant="outline-secondary" type="submit" size="sm">
                            Create new account
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register