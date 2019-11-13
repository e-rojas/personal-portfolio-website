import React from "react"
import "./layout.css"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { NavDropdown, Navbar, Nav } from "react-bootstrap"

export default () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link className="navbar-brand" to="/">
          Edgar Rojas
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto d-lg-inline-flex">
          <Nav.Link>
            <Link className="nav-link " to="/">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link " to="/blog">
              Blog
            </Link>
          </Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
            <NavDropdown.Item className="bg-dark">
              <Link className="nav-link " to="/shop">
                Bike Shop
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="bg-dark">
              <Link  className="nav-link " to="/todoApp">
               Todo App
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

//update activeClassName="activado"
