import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import HomePage from '../Home/HomePage';
import ContactPage from '../ContactPage/ContactPage';
import LoginPage from '../Login/LoginPage'
import GymnocalyciumPage from '../Gymnocalycium/GymnocalyciumPage';
import MammillariaPage from '../Mammillaria/MammillariaPage';

import AddPage from '../Add/AddPage';
import ManagePage from '../Manage/ManagePage';
import PicturePage from '../Picture/PicturePage';

import './ComponentStyle.css';

let isLogin = true //ตัวแปรเช็คว่า login หรือยัง

export default function NavbarComp() {

    if (isLogin === false) {
        return (
            <Router>
                <div>
                    <Navbar className='NavbarStyle' bg="dark" variant={"dark"} expand="lg">
                        <span>
                            <Image className='imageLogo' src='/Images/cactus_logo.jpg'></Image>
                        </span>
                        <Navbar.Brand href="#">CACTUS FAMILY</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <div style={{ width: "100%" }}>
                                <Nav
                                    className="mr-auto my-2 my-lg-0 justify-content-end"
                                    style={{ maxHeight: '100px', width: "100%" }}
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
                            <LoginPage />
                        </Route>
                        <Route path="/cactus">
                            <ContactPage />
                        </Route>
                        <Route path="/gymnocalycium">
                            <GymnocalyciumPage />
                        </Route>Gymnocalycium
                        <Route path="/mammillaria">
                            <MammillariaPage />
                        </Route>
                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </div>
            </Router >
        )

    } else {
        // ถ้า login แล้ว
        return (
            <Router>
                <div>
                    <Navbar className='NavbarStyle' bg="dark" variant={"dark"} expand="lg">
                        <span>
                            <Image className='imageLogo' src='/Images/cactus_logo.jpg'></Image>
                        </span>
                        <Navbar.Brand href="#">CACTUS FAMILY</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <div style={{ width: "100%" }}>
                                <Nav
                                    className="mr-auto my-2 my-lg-0 justify-content-end"
                                    style={{ maxHeight: '100px', width: "100%" }}
                                    navbarScroll
                                >
                                    <Nav.Link as={Link} to="/add">Add</Nav.Link>
                                    <Nav.Link as={Link} to="/manage">Manage</Nav.Link>
                                    <Nav.Link as={Link} to="/picture">Picture</Nav.Link>
                                    <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                                </Nav>
                            </div>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route path="/manage">
                            <ManagePage />
                        </Route>
                        <Route path="/picture">
                            <PicturePage />
                        </Route>
                        <Route path="/">
                            <AddPage />
                        </Route>
                    </Switch>
                </div>
            </Router >
        )
    }
}
