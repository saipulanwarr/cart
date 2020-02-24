import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navbars = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">SaCart</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbars;