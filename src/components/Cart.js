import React, { useContext } from 'react';
import { cartContext } from './CartContext';
import './Cart.css';

const Cart = () => {

    const { shoppingCart, totalPrice, qty, dispatch } = useContext(cartContext);
    //we use  distruction we need all data which is came from  cartcontext component


    return (
        <div className="cart-container">
            <div className="cart-details" style={{ marginTop: '100px' }}>
                {shoppingCart.length > 0 ?
                    shoppingCart.map((cart) => (
                        <div className="cart" key={cart.id}>
                            <span className="cart-image">
                                <img src={cart.image} alt="not found" style={{ width: '100px', heigth: '100px', marginTop: '20px' }} />
                            </span>
                            <span className="cart-product-name">{cart.name}</span>
                            <span className="cart-product-price">{cart.price}</span>
                            <span className="inc" onClick={() => dispatch({ type: 'INC', id: cart.id, cart })} ><i className="fas fa-plus"></i></span>
                            <span className="product-quantaty">{cart.qty}</span>
                            <span className="dec"><i className="fas fa-minus"></i></span>
                            <span className="product-total-price">{cart.price * cart.qty}</span>
                            <span className="delete-product"><i className="fas fa-trash-alt"></i></span>
                        </div>
                    ))
                    : "Sorry your cart is currently empty"}
            </div>
        </div>
    )
}

export default Cart
