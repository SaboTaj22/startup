import React from 'react';
import { NavLink } from 'react-router-dom';

// React Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CustomNavbar() {
  return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
            <Navbar.Brand as={NavLink} to="/">Krecia Fullmer Art</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/inventory">Inventory</Nav.Link>
                    <Nav.Link as={NavLink} to="/faq">FAQ</Nav.Link>
                    <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
  );
}

export default CustomNavbar;