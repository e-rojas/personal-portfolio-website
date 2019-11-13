import React from "react"
import "./layout.css"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { NavDropdown, Navbar, Nav } from "react-bootstrap"

export default () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <Link className="navbar-brand" to="/">
            Edgar Rojas
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link activeClassName="activado" className="nav-link " to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link activeClassName="activado" className="nav-link " to="/blog">
                Blog
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown style={{marginRight:'100px'}} title="Portfolio" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link  className="nav-link text-dark " to="/todoApp">
                  Todo App
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className="nav-link text-dark " to="/shop">
                  Bike Shop
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
//activeClassName="activado"
