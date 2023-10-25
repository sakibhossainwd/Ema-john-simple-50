// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect ( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } , [])
    return (
        <div className='Shop-Container'>
            <div className="products-container">
                <h1>Total products {products.length}</h1>
            </div>
            <div className="cart-container">
                <h2>This is cart container</h2>
            </div>
        </div>
    );
};

export default Shop;