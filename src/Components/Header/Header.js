import React from 'react'
import MiniCart from '../MiniCart/MiniCart';
import logo from "./../../assets/images/logo.png"
const Header = ({ totalItems }) => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand logo" href="#">
                            <img className="img-fluid" src={logo} alt="logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link cart-toggler" href="#">
                                        <MiniCart totalItems={totalItems} />
                                    </a>
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
