import React from 'react'
import { Link } from 'react-router-dom'
import MiniCart from '../MiniCart/MiniCart';
import logo from "./../../assets/images/logo.png"
const Header = ({ cart, deleteItem, updateCart }) => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link to='/' className="navbar-brand logo">
                            <img className="img-fluid" src={logo} alt="logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
                                <li className="nav-item">
                                    <Link to='/' className="nav-link" > Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/products' className="nav-link" >Products</Link>
                                </li>
                                <li className="nav-item" style={{ cursor: "pointer" }}>
                                    <MiniCart cart={cart} deleteItem={deleteItem} updateCart={updateCart} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
