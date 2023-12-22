// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'

const Products = (props) => {
    console.log(props)
    const {img, name, seller, price, ratings} = props.product;
    const handleAddToCart = props.handleAddToCart

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
                <button onClick={ () => handleAddToCart(props.product)} className="add-to-cart">
                    Add to Cart 
                    <FontAwesomeIcon icon={faShoppingCart}/>
                    </button>
        </div>
    );
};

export default Products;