import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavbarComp() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Dairy" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">All Events</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Create Event</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Recommendations</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Admin</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand href="#/">Pain dairy</Navbar.Brand>
            </Container>
        </Navbar>

    )
}

export default NavbarComp;