import React from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import MiniCartItem from '../MiniCart/MiniCartItem/MiniCartItem';
const Cart = ({ cart, updateCart, deleteItem }) => {
    return (
        <motion.div className="container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {
                cart && cart.total_items > 0
                    ?
                    <div className="cart_main ">
                        <div className="cart_items">
                            {
                                cart.line_items.map(
                                    cartItem =>
                                        <MiniCartItem cartItem={cartItem} deleteItem={deleteItem} updateCart={updateCart}
                                        />
                                )
                            }
                        </div>
                        <div className="cart_totals">
                            <h4>Cart Totals</h4>
                            <div>
                                <p className="d-flex justify-content-lg-between align-items-center">
                                    <span>Subtotal</span>
                                    <span>{cart.subtotal.formatted_with_symbol}</span>
                                </p>

                                <p className="d-flex justify-content-lg-between align-items-center">
                                    <span>Total items</span>
                                    <span>{cart.total_items}</span>
                                </p>

                            </div>
                            <Link to="/checkout" className="btn btn-primary d-flex justify-content-center align-items-center border-0 rounded mt-5">
                                Proceed to checkout
                            </Link>
                        </div>
                    </div>
                    :
                    <div className="cart_empty">
                        <h5>Your cart is empty</h5>
                        <Link to='/products' className="btn btn-primary my-4 rounded"> Start Shopping</Link>
                    </div>

            }
        </motion.div>
    )
}

export default Cart;
