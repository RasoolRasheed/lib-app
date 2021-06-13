import React from "react";
import { Nav, Navbar} from "react-bootstrap";

const NavBar: React.FC = () => {
    return (
        <Navbar sticky="top" bg="light" expand="lg">
            <Navbar.Brand href="/">My Library</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;