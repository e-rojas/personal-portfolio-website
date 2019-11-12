import React from 'react';
import "./layout.css"
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown,Navbar,Nav } from 'react-bootstrap';






export default () => {
  
 
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand ><Link className="navbar-brand"to="/">Edgar Rojas</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto d-lg-inline-flex">
      <Nav.Link ><Link activeClassName="activado" className="nav-link " to="/">Home</Link></Nav.Link>
      <Nav.Link ><Link activeClassName="activado" className="nav-link " to="/blog">Blog</Link></Nav.Link>
    </Nav>
    <Nav>
    <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
          <NavDropdown.Item className='bg-dark' > <Link activeClassName="activado" className="nav-link " to="/shop" >Bike Shop</Link> </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
 
    );
}


  {/*     <header>
        <nav className="navbar navbar-dark  fixed-top pr-5 pl-5"> <Link className="navbar-brand"to="/">Edgar Rojas</Link>
          <ul className="nav justify-content-end">
            <li className="nav-item "><Link activeClassName="activado" className="nav-link " to="/">Home</Link></li>
            <li className="nav-item"><Link activeClassName="activado" className="nav-link " to="/blog">Blog</Link></li>
            <NavDropdown  title="Portfolio" id="basic-nav-dropdown">
        <NavDropdown.Item className='bg-dark' > <Link activeClassName="activado" className="nav-link " to="/shop" >Bike Shop</Link> </NavDropdown.Item>
       
      </NavDropdown>
          </ul>
      <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>
    </nav>
  </header> */}