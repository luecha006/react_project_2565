import React, { Component } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import './LoginPage.css'
export default class LoginPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            checkbox: false,
            isLogin: false,
        }
    }

    render() {
        const headleLogin = () => {

            const admin1 = {
                email: 'admin001@gmail.com',
                password: '0000'
            }

            const admin2 = {
                email: 'admin002@gmail.com',
                password: '0000'
            }

            console.log('click login');

            if (((this.state.email === admin1.email) && (this.state.password === admin1.password)) || ((this.state.email === admin2.email) && (this.state.password === admin2.password))) {

                this.setState({ isLogin: true });
                alert('login successfully');
                // console.log('');
                // localStorage.setItem('isLogin', JSON.stringify(this.state.isLogin));
                // sessionStorage.setItem('isLogin', this.state.isLogin);
            } else {
                this.setState({ isLogin: false });
                alert('login failed');
                // console.log('login failed');
                // sessionStorage.setItem('isLogin', this.state.isLogin);
                // localStorage.setItem('isLogin', JSON.stringify(this.state.isLogin));
            }
        }

        const handleUsername = even => {
            this.setState({ email: even.target.value });
        }

        const handlePassword = even => {
            this.setState({ password: even.target.value });
        }
        const handleCheckBox = even => {
            this.setState({ checkbox: even.target.checked });
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
