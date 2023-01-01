import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Navbar className="top-header" expand="lg">
                <Container>
                    <Navbar className="logo" ><NavLink to="/movies">moviebox</NavLink></Navbar>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink className="nav-menu" to="/overview">Overview</NavLink>
                            <NavLink className="nav-menu active" to="/movies">Movies</NavLink>
                            <NavLink className="nav-menu" to="/reporting">Reporting</NavLink>
                            <NavLink className="nav-menu" to="/users">Users</NavLink>
                        </Nav>
                        <Nav className="nav-right">
                            <NavLink className="right-nav-menu" to="/">
                                <img src="../assets/images/Vector/setting-icon.png" alt="icon" />
                            </NavLink>
                            <NavLink className="right-nav-menu" to="/">
                                <img src="../assets/images/Vector/ball-icon.png" alt="icon" />
                            </NavLink>
                            <NavLink className="right-nav-menu mr-0" to="/">
                                <img src="../assets/images/Vector/Avatar.png" alt="icon" />
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;