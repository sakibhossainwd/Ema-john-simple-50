// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line react/prop-types
const Cart = ({cart}) => {
    // 1st way
    // const cart = props.cart;

    // 2nd way
    // const {cart} = props;
    
    console.log(cart)
    let total = 0;
    for (const product of cart){
       total = total + product.price;
    }

    return (
        <div className='cart'>
             <div className="heading">
                 <h2>Order Summary</h2>
             </div>
            <p>Product items: {cart.length}</p>
            <p>Total Price: $ {total}</p>
            <p>Toal Shiping Charge: $5</p>
            <p>Tax: $</p>
            <h4>Grand Total: $</h4>
            <div className="cartBtns">
                <div className="clear-btn">
                    <button>
                        Clear Cart
                        <FontAwesomeIcon icon={faTrash}/>
                    </button>
                </div>
                <div className="review-btn">
                    <button>
                        Review Order
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;