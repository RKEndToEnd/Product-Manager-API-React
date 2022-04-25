import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Form} from "react-bootstrap";
import Header from "./Header";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate('/create')
        }
    }, [])

    async function login() {
        let item = {email, password}
        let result = await fetch("http://127.0.0.1:8000/api/login", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            }
        })
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate('/create')
    }

    return (
        <div>
            <Header/>
            <div className="d-flex container align-items-center justify-content-center" style={({marginTop: '30px'})}>
                <div className="card col-md-4">
                    <div className="card-header bg-info opacity-75">
                        <h6>Login</h6>
                    </div>
                    <div className="card-body">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email"
                                              onChange={(e) => setEmail(e.target.value)}
                                              placeholder="Enter email" size="sm"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"
                                              onChange={(e) => setPassword(e.target.value)}
                                              placeholder="Password" size="sm"/>
                            </Form.Group>
                        </Form>
                    </div>
                    <div className="card-footer bg-info opacity-75">
                        <Button onClick={login}
                                variant="outline-secondary" type="submit" size="sm">
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login