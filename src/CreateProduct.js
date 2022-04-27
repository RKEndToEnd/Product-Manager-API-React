import Header from "./Header";
import {Button, Form} from "react-bootstrap";
import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function CreateProduct() {
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")
    const [file, setFile] = useState("")
    const navigate = useNavigate();

    async function newProduct() {
        const formData = new FormData()
        formData.append('product_name', name)
        formData.append('product_category', category)
        formData.append('product_description', description)
        formData.append('product_amount', amount)
        formData.append('file', file)
        let result = await fetch("http://127.0.0.1:8000/api/createProduct", {
            method: 'POST',
            body: formData,
        })
        navigate('/')
        alert("New product created!")
    }


    return (
        <div>
            <Header/>
            <div className="d-flex container align-items-center justify-content-center" style={({marginTop: '30px'})}>
                <div className="card col-md-6">
                    <div className="card-header bg-info opacity-75">
                        <h6>Create new product</h6>
                    </div>
                    <div className="card-body">
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Product name</Form.Label>
                                <Form.Control type="text"
                                              onChange={(e) => setName(e.target.value)}
                                              placeholder="Enter product name" size="sm"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Product category</Form.Label>
                                <Form.Control type="text"
                                              onChange={(e) => setCategory(e.target.value)}
                                              placeholder="Enter product category" size="sm"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Product description</Form.Label>
                                <Form.Control as="textarea" rows={3} type="text"
                                              onChange={(e) => setDescription(e.target.value)}
                                              placeholder="Enter product description" size="sm"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Product amount</Form.Label>
                                <Form.Control type="number" min="0"
                                              onChange={(e) => setAmount(e.target.value)}
                                              placeholder="Enter product amount" size="sm"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Product image</Form.Label>
                                <Form.Control type="file"
                                              onChange={(e) => setFile(e.target.files[0])}
                                              placeholder="Upload product image" size="sm"/>
                            </Form.Group>
                        </Form>
                    </div>
                    <div className="card-footer bg-info opacity-75">
                        <Button onClick={newProduct} variant="outline-secondary" type="submit" size="sm">
                            Add product to data base
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateProduct