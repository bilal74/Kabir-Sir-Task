import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="navbar navbar-dark bg-dark">
                
                <a to="" className="navbar-brand">Geekster</a>
                <ul className="nav">
                    <li className="nav-item"><Link to="/" className="nav-link text-white">Home</Link></li>
                    <li className="nav-item"><Link to="/counter" className="nav-link text-white">Counter</Link></li>
                    <li className="nav-item"><Link to="/user" className="nav-link text-white">Context</Link></li>
                    <li className="nav-item"><Link to="./post" className="nav-link text-white">Post</Link></li>
                </ul>
                </nav>
            </div>
        </div>
    )
}
