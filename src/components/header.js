import React from "react"
import "./layout.css"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
faGripVertical
} from "@fortawesome/free-solid-svg-icons";
import { NavDropdown, Navbar, Nav } from "react-bootstrap"

export default () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='sticky-top'>
        <Link className="navbar-brand" to="/">
          {" "}
          Edgar Rojas{" "}
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" >
        <FontAwesomeIcon icon={faGripVertical} />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link activeClassName="activado" className="nav-link " to="/">
              {" "}
              Home
            </Link>
            <Link activeClassName="activado" className="nav-link " to="/blog">
              {" "}
              Blog
            </Link>
            <NavDropdown title="React Projects" id="collasible-nav-dropdown">
              <Link className="nav-link text-dark " to="/todoApp">
                {" "}
                Todo App
              </Link>
              <NavDropdown.Divider />
              <Link className="nav-link text-dark " to="/shop">
                {" "}
                Bike Shop
              </Link>
              <NavDropdown.Divider />
              <Link className="nav-link text-dark " to="/movie">
                {" "}
                Movie Info
              </Link>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
