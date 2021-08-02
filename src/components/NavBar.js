import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import  Nav from 'react-bootstrap/Nav';



const NavBar = () => {
    return (

        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/"> <img
                    src={'/favicon.ico'}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="NavBar logo"
                /></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="./Profile">Profile</Nav.Link>
                    <Nav.Link href="./About">About</Nav.Link>
                    <Nav.Link href="./UserDetails">Users</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )

};
export default NavBar;