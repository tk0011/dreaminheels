import React from 'react'
import Cart from '../../assets/images/shopping-cart.svg'

const MiniCart = ({ cart }) => {
    const openCart = () => {
        document.getElementById("cartSidebar").style.width = "32%";
    }
    const closeCart = () => {
        document.getElementById("cartSidebar").style.width = "0";
    }

    return (
        <div>
            <div id="cartSidebar" className="sidenav">
                <span className="closebtn" onClick={() => closeCart()}>&times;</span>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>

            <div className="cart-toggler" onClick={() => openCart()} style={{ width: '20px', padding: '0.5rem 0' }}>
                <img src={Cart} alt="cart" className="img-fluid" />
                <span className="badge badge-primary">{cart.total_items}</span>
            </div>
        </div >
    )
}

export default MiniCart;
