import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Button, ThemeProvider } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css'

function NavbarComp({ userActive, logOut, setShowOrNot }) {


    return (
        <Navbar bg="light" expand="md" className="mainNav">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <NavDropdown title="Diary" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/diarys">All Events</NavDropdown.Item>
                            <NavDropdown.Item as={Button} onClick={() => setShowOrNot(true)} disabled={!userActive}>Create Event</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/recommendation"  disabled={!userActive}>Recommendations</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav>
                    { userActive ? <><Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" onClick={logOut}>Log-Out</Nav.Link>
                    </Nav></> : <><Nav className="ms-auto">
                        <Nav.Link as={Link} to="/log-in">Log-In</Nav.Link>
                        <Nav.Link as={Link} to="/sign-up">Sign-Up</Nav.Link>
                    </Nav></>}

                </Navbar.Collapse>
            </Container>
            <Navbar.Brand href="#/">Pain diary</Navbar.Brand>
        </Navbar>
    )
}

export default NavbarComp;