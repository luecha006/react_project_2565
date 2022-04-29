import React, { Component } from 'react';
import { Card, Container, Row, Col, Button, Image } from 'react-bootstrap';

import { Link } from "react-router-dom";

import { Nav } from 'react-bootstrap';
import './ContactPage.css';


export default class ContactPage extends Component {

    render() {
        return (
            <div>
                <h2 className='mt-5 mb-5'>เลือกตระกุล</h2>
                <br />
                <div className='mt-5'>
                    <Container>
                        <Row>
                            <Col className='m-2'>
                                <div>
                                    <Card>
                                        <Card.Body>
                                            <div className='mb-4'>
                                                <Image className='imageLogo' rounded="true" src='/Images/mammillaria.jpg'
                                                    style={{ width: "50%", height: "50%" }}></Image>
                                            </div>
                                            <Button variant="primary" style={{ width: "50%" }}>
                                                <Nav.Link as={Link} to="/mammillaria"
                                                    style={{ padding: "0px", margin: "0px", color: 'white' }}>Mammillaria
                                                </Nav.Link>
                                            </Button>

                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col className='m-2'>
                                <div>
                                    <Card>
                                        <Card.Body>
                                            <div className='mb-4'>
                                                <Image className='imageLogo' rounded="true" src='/Images/gymnocalycium.jpg'
                                                    style={{ width: "50%", height: "50%" }}></Image>
                                            </div>
                                            <Button variant="primary" style={{ width: "50%" }}>
                                                <Nav.Link as={Link} to="/gymnocalycium"
                                                    style={{ padding: "0px", margin: "0px", color: 'white' }}>Gymnocalycium
                                                </Nav.Link>
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <br />
                <br />
            </div>
        )
    }
}
