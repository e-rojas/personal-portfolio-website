import React from 'react';
import "./layout.css"
import { Link } from 'gatsby'





export default () => {
  
 
    return (
       <header>
        <nav className="navbar navbar-dark  fixed-top pr-5 pl-5"> <Link className="navbar-brand"to="/">Edgar Rojas</Link>
          <ul className="nav justify-content-end">
            <li className="nav-item "><Link activeClassName="activado" className="nav-link " to="/">Home</Link></li>
            <li className="nav-item"><Link activeClassName="activado" className="nav-link "  to="/blog">Blog</Link></li>
          </ul>
      <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>
    </nav>
  </header>
    );
}


