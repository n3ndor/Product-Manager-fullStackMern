import React, { useState } from 'react';
import CreateProduct from '../components/CreateProduct';
import DisplayAll from "../components/DisplayAll";


const Main = () => {

    const [productList, setProductList] = useState([]);

    const removeFromDom = productId => {
        setProductList(productList.filter(productList => productList._id !== productId));
    }

    return (
        <div>
            <CreateProduct productList={productList} setProductList={setProductList} />
            <DisplayAll productList={productList} setProductList={setProductList} removeFromDom={removeFromDom} />
        </div>
    )
}

export default Main;