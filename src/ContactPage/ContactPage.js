import React, { Component } from "react";
import { Card, Container, Row, Col, Button, Image } from "react-bootstrap";


import { Link } from "react-router-dom";

import { Nav } from "react-bootstrap";
import "./ContactPage.css";

export default class ContactPage extends Component {
    render() {
        return (
            <div>
                <h1 className="mt-5 mb-5">Select Species</h1>
                <br />
                <div className="mt-5">
                    <Container>
                        <Row>
                            <Col className="species1 m-2">
                                
                                    <div className="mb-4">
                                        <Image
                                            className="imageLogo1"
                                            rounded="true"
                                            src="/Images/mam-pre.jpg"
                                            style={{ width: "50%", height: "50%" }}></Image>
                                    </div>
                                    <Button variant="success" style={{ width: "50%" }}>
                                        <Nav.Link
                                            as={Link}
                                            to="/mammillaria"
                                            style={{ padding: "0px", margin: "0px", color: "white" }}
                                        >
                                            Mammillaria
                                        </Nav.Link>
                                    </Button>
                               
                            </Col>
                            <Col className="m-2">
                                
                                    <div className="mb-4">
                                        <Image
                                            className="imageLogo2"
                                            rounded="true"
                                            src="/Images/gymno-pre.jpg"
                                            style={{ width: "50%", height: "50%" }}></Image>
                                    </div>
                                    <Button variant="success" style={{ width: "50%" }}>
                                        <Nav.Link
                                            as={Link}
                                            to="/gymnocalycium"
                                            style={{ padding: "0px", margin: "0px", color: "white" }}
                                        >
                                            Gymnocalycium
                                        </Nav.Link>
                                    </Button>
                               
                            </Col>
                        </Row>
                    </Container>
                </div>
                <br />
                <br />
            </div>
        );
    }
}
