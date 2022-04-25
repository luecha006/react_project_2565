import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import Contact from './Contact';
import Login from './Login'

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="dark" variant={"dark"} expand="lg">

                        <Navbar.Brand href="#">Cactus Family</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <div style={{ width: "100%"}}>
                                <Nav
                                    className="mr-auto my-2 my-lg-0 justify-content-end"
                                    style={{ maxHeight: '100px', width: "100%"}}
                                    navbarScroll
                                >
                                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/cactus">Cactus</Nav.Link>
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                </Nav>
                            </div>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/cactus">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router >
        )
    }
}
