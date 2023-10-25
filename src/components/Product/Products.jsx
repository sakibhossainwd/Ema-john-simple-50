// eslint-disable-next-line no-unused-vars
import React from 'react';

const Products = (props) => {
    const {img, name, seller, price} = props.product;
    console.log(props)
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Products;