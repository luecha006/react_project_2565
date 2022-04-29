import React, { Component, useContext } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

import { loginContext } from '../Context/Context';

import './LoginPage.css'

export default class LoginPage extends Component {

    // static context  = loginContext.value;
    
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            checkbox: false
        }

        // this.handleLogin = this.handleLogin.bind(this);
    }
    render() {
        // const authLogin = useContext(loginContext);
        // console.log('value ',value);

        const headleLogin = () => {
            const user = 'admin';
            const pass = '0000';

            console.log('click login')
        }

        const handleUsername = even => {
            this.username = even.target.value;
        }

        const handlePassword = even => {
            this.password = even.target.value;
        }
        const handleCheckBox = even => {
            this.checkbox = even.target.checked;
        }



        return (
            <div className='container' style={{ width: '30%', height: '100%' }}>
                <br />
                <br />
                <br />
                <br />
                <Card border="secondary" style={{ background: '#ECEFF1' }}>
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
                                    <Form.Control type="email" placeholder="Enter email" onChange={handleUsername} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter Password" onChange={handlePassword} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox" onChange={handleCheckBox}>
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="secondary" type="submit" style={{ width: "100%" }}
                                    onClick={headleLogin}>
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
