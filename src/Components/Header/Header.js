import React from 'react'

const Header = () => {
    return (
      <>
                <header>
                                <nav className="navbar navbar-expand-lg">
                                <div className="container-fluid">
                                    <a className="navbar-brand" href="#">Dream in Heels</a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav" style={{marginLeft:"auto"}}>
                                        <li className="nav-item">
                                        <a className="nav-link" href="#">Products</a>
                                        </li>
                                        <li className="nav-item">
                                        <a className="nav-link" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z"/>
                                        </svg>
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
