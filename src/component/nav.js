import React from 'react'

import { Switch, Route, Link, BrowserRouter } from "react-router-dom";



 const Nav = () => {
    
          
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="nav-link" aria-current="page" to="/">
              <span className="navbar-brand">MOOVICE</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
  
                <li className="nav-item">
                  <Link className="nav-link" to="/populaire">
                    Les plus populaires
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dumoment">
                    Du moment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="mieuxnotes">
                    Les mieux notés
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/favoris">
                    Favoris
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}
export default Nav;