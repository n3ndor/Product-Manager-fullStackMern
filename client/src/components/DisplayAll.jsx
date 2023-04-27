import React, { useEffect, useState } from 'react';
import axios from "axios";

const DisplayAll = (props) => {

    const { productList, setProductList } = props;

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((err) => console.log(err))
    }, [])



    return (
        <div>DisplayAll</div>
    )
}

export default DisplayAll;