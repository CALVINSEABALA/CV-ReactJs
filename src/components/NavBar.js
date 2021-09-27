import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import  Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';




const NavBar = () => {
    return (

        <Navbar bg="light" variant="light">
            <Container style={{borderRadius: "12px",
                transition: "width 2s, height 2s,transform 2s",
                backdropFilter:"blur(15px)",
                boxShadow:"0 4px 30px rgba(0, 0, 0, 0.5)"

            }}>
                <Navbar.Brand href="/"> <img
                    src={'/favicon.ico'}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="NavBar logo"
                />Home</Navbar.Brand>

                <Nav className="link">
                    <Link to="./About">About</Link>
                </Nav>
                <Nav className="link">
                    <Link to="./UserDetails">Users</Link>
                </Nav>
            </Container>
        </Navbar>
    )

};
export default NavBar;