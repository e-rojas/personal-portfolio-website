import React from "react"
import "./layout.css"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { NavDropdown, Navbar, Nav } from "react-bootstrap"

export default () => {
  return (
 feature/navFix
    <div>

 master
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link className="navbar-brand" to="/"> Edgar Rojas </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link activeClassName="activado" className="nav-link " to="/"> Home</Link>
          <Link activeClassName="activado" className="nav-link " to="/blog"> Blog</Link>
          <NavDropdown title="React Projects" id="collasible-nav-dropdown">
            <Link className="nav-link text-dark " to="/todoApp"> Todo App</Link>
            <NavDropdown.Divider />
            <Link className="nav-link text-dark " to="/shop"> Bike Shop</Link>
            <NavDropdown.Divider />
 feature/navFix
            <Link className="nav-link text-dark " to="/movies"> Movie Info</Link>

            <Link className="nav-link text-dark " to="/films"> Film Info</Link>
master
          </NavDropdown>
          
        </Nav>
    
      </Navbar.Collapse>
    </Navbar>
 feature/navFix
    </div>

   
 master
  )
};