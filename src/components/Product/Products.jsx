// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Products.css'

const Products = (props) => {
    const {img, name, seller, price, ratings} = props.product;
    console.log(props)
    return (
        <div className='product'>
            <img src={img} alt="" />
                <div className="product-details">
                <div className="name-price">
                    <h3>{name}</h3>
                    <p>Price: ${price}</p>
                </div>
                <div className="brand-rating">
                    <p>Manufecture: {seller}</p>
                    <p>Ratting: {ratings} Start</p>
                </div>
                </div>
        </div>
    );
};

export default Products;