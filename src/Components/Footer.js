import React from "react";
import { Row, Container } from "react-bootstrap";

function Footer() {
    return (
        <div className="footer-section">
            <Container fluid>
                <Row>
                    <div className="copyright-section">
                        <div className="copyright">© 2022 <span> moviebox </span> All Rights Reserved</div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;