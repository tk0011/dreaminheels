import React from 'react';
import { Link } from 'react-router-dom'
import MiniCartItem from './MiniCartItem/MiniCartItem'
import Cart from '../../assets/images/shopping-cart.svg'

const MiniCart = ({ cart, deleteItem, updateCart }) => {
    const openCart = () => {
        document.getElementById("cartSidebar").style.width = "32%";
        document.getElementsByTagName('main')[0].classList.add('menu_open');
    }
    const closeCart = () => {
        document.getElementById("cartSidebar").style.width = "0";
        document.getElementsByTagName('main')[0].classList.remove('menu_open');
    }

    console.log(cart);


    return (
        <div>
            <div id="cartSidebar" className="sidenav">
                <span style={{ position: "absolute", fontSize: '30px', left: "90%", top: "2%", cursor: "pointer" }} className="closebtn" onClick={() => closeCart()}>&times;</span>
                <div>
                    {
                        cart && cart.total_items > 0
                            ? <div>
                                {
                                    cart.line_items.map(
                                        cartItem =>
                                            <MiniCartItem cartItem={cartItem} deleteItem={deleteItem} updateCart={updateCart}
                                            />
                                    )
                                }
                                <div className="p-5">
                                    <h3 className="d-flex justify-content-between align-items-center mb-5">
                                        Total : <span> {cart.subtotal.formatted_with_symbol} </span>
                                    </h3>
                                    <Link to="/cart" onClick={closeCart} className="d-block my-2 w-75 mx-auto btn btn-primary rounded">
                                        View Cart
                                    </Link>
                                    <Link to="" className="d-block my-2 w-75 mx-auto btn btn-primary rounded">
                                        Proceed to checkout
                                    </Link>
                                </div>
                            </div>
                            : <div className="my-5 pt-5 d-flex align-items-center justify-content-center flex-column h-100"><h5>Your cart is empty</h5>
                                <Link to='/products' onClick={closeCart} className="btn btn-primary my-4 rounded"> Start Shopping</Link>
                            </div>
                    }
                </div>

            </div>

            <div className="cart-toggler" onClick={() => openCart()} style={{ width: '20px', padding: '0.5rem 0' }}>
                <img src={Cart} alt="cart" className="img-fluid" />
                {cart && cart.total_items > 0
                    ? <span className="badge badge-primary">{cart.total_items}</span>
                    : <span className="badge badge-primary">0</span>
                }
            </div>
        </div >
    )
}

export default MiniCart;
