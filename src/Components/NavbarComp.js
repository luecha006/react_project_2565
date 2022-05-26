import React, { useEffect, useState } from 'react'
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

import firebaseConfig from '../Firebase/config';

import './ComponentStyle.css';

export default function NavbarComp() {

    const [session, setSession] = useState({
        isLoggedIn: false,
        currentUser: null,
        errorMessage: null
    });

    useEffect(() => {
        const handleAuth = firebaseConfig.auth().onAuthStateChanged(user => {
            if (user) {
                setSession({
                    isLoggedIn: true,
                    currentUser: user,
                    errorMessage: null
                });
            }
        });

        return () => {
            handleAuth();
        };
    }, []);

    const handleLogout = () => {
        firebaseConfig.auth().signOut().then(response => {
            setSession({
                isLoggedIn: false,
                currentUser: null
            });
        });
    };

    if (session.isLoggedIn === false) {
        return (
            <>
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
                                <LoginPage setSession={setSession} />
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
            </>
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
                                    <Nav.Link as={Link} to="/logout" onClick={handleLogout}>Logout</Nav.Link>
                                </Nav>
                            </div>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route path="/">
                            <ManagePage />
                        </Route>
                        <Route path="/picture">
                            <PicturePage />
                        </Route>
                        <Route path="/add">
                            <AddPage />
                        </Route>
                    </Switch>
                </div>
            </Router >
        )
    }
}