import Header from "./Header";
import React, {useState, useEffect} from "react";
import {Button, Table} from "react-bootstrap";

function ProductsList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            getProducts()
        }

        fetchData()
    }, [])

    async function deleteAction(id) {
        let result = await fetch("http://127.0.0.1:8000/api/delete/" + id, {
            method: "DELETE",
        });
        let response = await result.json();
        getProducts()
    }

    async function getProducts() {
        let result = await fetch("http://127.0.0.1:8000/api/productsList");
        let response = await result.json();
        setData(response)
    }

    return (
        <div>
            <Header/>
            <div className="d-flex container align-items-center justify-content-center" style={{marginTop: '30px'}}>
                <div className="card col-md-12">
                    <div className="card-header bg-info opacity-75">Products</div>
                    <div className="card-body">
                        <Table className=" table table-hover" size="sm">
                            <thead>
                            <tr>
                                <td>Id</td>
                                <td>Product name</td>
                                <td>Category</td>
                                <td>Description</td>
                                <td>Amount</td>
                                <td>Image</td>
                                <td>Actions</td>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                data.map((item) =>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.product_name}</td>
                                        <td>{item.product_category}</td>
                                        <td>{item.product_description}</td>
                                        <td>{item.product_amount}</td>
                                        <td><img style={{width: 75}} src={"http://127.0.0.1:8000/" + item.image_path}/>
                                        </td>
                                        <td><Button onClick={() => deleteAction(item.id)}
                                                    className="btn btn-danger btn-sm">X</Button></td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </Table>
                    </div>
                    <div className="card-footer bg-info opacity-75"></div>
                </div>
            </div>
        </div>
    )
}

export default ProductsList;