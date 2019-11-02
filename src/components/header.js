import React from 'react';
import "./layout.css"
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown } from 'react-bootstrap';





export default () => {
  
 
    return (
       <header>
        <nav className="navbar navbar-dark  fixed-top pr-5 pl-5"> <Link className="navbar-brand"to="/">Edgar Rojas</Link>
          <ul className="nav justify-content-end">
            <li className="nav-item "><Link activeClassName="activado" className="nav-link " to="/">Home</Link></li>
            <li className="nav-item"><Link activeClassName="activado" className="nav-link " to="/blog">Blog</Link></li>
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">AirBnb</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
       
      </NavDropdown>
          </ul>
      <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>
    </nav>
  </header>
    );
}


