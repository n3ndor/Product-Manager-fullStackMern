import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const Update = (props) => {

    const { id } = useParams();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products/" + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios
            .put("http://localhost:8000/api/products/" + id, {
                title,
                price,
                description
            })
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>Update a Product</h2>

            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label>
                    <br />
                    <input type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label>
                    <br />
                    <input type="number" name="price" value={price} onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label>
                    <br />
                    <input type="text" name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" value="Update" />
            </form>
            <Link to={"/"}>Go Back</Link>

        </div>
    )
}

export default Update