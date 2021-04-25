import React from 'react'
import { Link } from 'react-router-dom'
import MiniCart from '../MiniCart/MiniCart';
import logo from "./../../assets/images/logo.png"

import { useAuth0 } from "@auth0/auth0-react";


const Header = ({ cart, deleteItem, updateCart }) => {

    const { loginWithRedirect , isAuthenticated , logout , user} = useAuth0();

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
                                <li className="nav-item">
                                    <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 { isAuthenticated ? (<span id="usr_nm">{ user.given_name || user.nickname || user.email }</span>) : ( <i className="fas fa-user fa-lg"></i>)} 
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    { isAuthenticated ? (<button onClick={() => logout({ returnTo: window.location.origin })} class="dropdown-item" type="button">Logout</button>) : (<button onClick={() => loginWithRedirect()} class="dropdown-item" type="button">Login</button>)}
                                    {isAuthenticated ? '' : <button onClick={() => loginWithRedirect({ screen_hint: "signup" })} class="dropdown-item" type="button">Sign Up</button> }
                                </div>
                                </div>
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
