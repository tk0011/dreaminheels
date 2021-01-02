import React from 'react'
import Cart from '../../assets/images/shopping-cart.svg'
const MiniCart = () => {

    const openCart = () => {
        document.getElementById("cartSidebar").style.width = "32%";
    }

    const closeCart = () => {
        document.getElementById("cartSidebar").style.width = "0";
    }

    return (
        <div>
            <div id="cartSidebar" class="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={() => closeCart()}>&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>

            <div onClick={() => openCart()} style={{ width: '20px', padding: '0.5rem 0' }}>

                <img src={Cart} alt="cart" className="img-fluid" />

            </div>
        </div >
    )
}

export default MiniCart;
