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
    
    // console.log(cart)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart){
       product.quantity = product.quantity || 1;
       total = total + product.price * product.quantity;
       shipping = shipping + product.shipping * product.quantity;
       quantity = quantity + product.quantity;
    }
    const tax = total*7/100
    
    const grandTotal = total + shipping + tax;
    

    return (
        <div className='cart'>
             <div className="heading">
                 <h2>Order Summary</h2>
             </div>
            <p>Product items: {quantity}</p>
            <p>Total Price: $ {total.toFixed(2)}</p>
            <p>Toal Shiping Charge: ${shipping.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
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