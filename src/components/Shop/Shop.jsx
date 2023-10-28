// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Product/Products';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect ( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } , []);

    const handleAddToCart = (product) => {
        console.log(product)
    }
    
    return (
        <div className='Shop-Container'>
            <div className="products-container">
                {
                    products.map(product => <Products
                    key={product.id}
                    product={product}
                    handleAddToCart = {handleAddToCart}
                    ></Products>)
                }
            </div>
            <div className="cart-container">
                <h2>This is cart container</h2>
            </div>
        </div>
    );
};

export default Shop;