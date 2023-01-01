import React from "react";
import { Navbar } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

function HeaderBottom() {
    return (
        <div>
            <Navbar className="botoom-navbar" expand="lg">
                <Container>
                    <Nav className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <span className="nav-title m-0">Avengers Black Widow</span>
                    </Nav>
                    <Nav className="nav-right">
                        <Button className="export-btn"><img src="../assets/images/Vector/export.png" alt="Export" /> Export</Button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default HeaderBottom;
