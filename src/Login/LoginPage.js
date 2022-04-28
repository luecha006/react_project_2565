import React, { Component } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import './LoginPage.css'

export default class LoginPage extends Component {
    render() {
        return (
            <div className='container' style={{ width: '30%', height: '100%' }}>
                <br />
                <br />
                <br />
                <br />
                <Card border="secondary" style={{background: '#ECEFF1'}}>
                    <Card.Body>
                        <h2>Login</h2>

                        <br />
                        <br />
                        <br />
                        <br />
                        <div>
                            <Form style={{ textAlign: 'start' }}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="secondary" type="submit" style={{ width: "100%" }}>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
