import { Container, Row, Col } from "react-bootstrap";
import { ChevronDoubleRight } from "react-bootstrap-icons";

export default function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src="" alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div>
                            <a href="https://pureumsun.com/portfolio/">Portfolio Details <ChevronDoubleRight size={40} /></a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
      </footer>
    )
}