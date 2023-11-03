// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
import './Shop.css'
import Products from '../Product/Products';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect ( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } , []);

    // this useEfect for localstorage
    useEffect( () => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        //step 1: get id
        for(const id in storedCart){
            // step 2: get the product by using id
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                 // step 3: get quantity of product
                const  quantity = storedCart[id]
                addedProduct.quantity = quantity
                // step 4: add the added product to the saved cart
                savedCart.push(addedProduct)
            }
        }
        // step 5: set the cart
        setCart(savedCart)
    } ,[products])

    
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;