import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "../Home/HomePage";
import ContactPage from "../ContactPage/ContactPage";
import LoginPage from "../Login/LoginPage";
import GymnocalyciumPage from "../Gymnocalycium/GymnocalyciumPage";
import MammillariaPage from "../Mammillaria/MammillariaPage";

import AddPage from "../Add/AddPage";
import ManagePage from "../Manage/ManagePage";
import PicturePage from "../Picture/PicturePage";

import firebaseConfig from "../Firebase/config";

import "./ComponentStyle.css";
import CorrectPage from "../Correct/CorrectPage";
import IncorrectPage from "../Incorrect/IncorrectPage";

export default function NavbarComp() {
  const [session, setSession] = useState({
    isLoggedIn: false,
    currentUser: null,
    errorMessage: null,
  });

  useEffect(() => {
    const handleAuth = firebaseConfig.auth().onAuthStateChanged((user) => {
      if (user) {
        setSession({
          isLoggedIn: true,
          currentUser: user,
          errorMessage: null,
        });
      }
    });

    return () => {
      handleAuth();
    };
  }, []);

  const handleLogout = () => {
    firebaseConfig
      .auth()
      .signOut()
      .then((response) => {
        setSession({
          isLoggedIn: false,
          currentUser: null,
        });
      });
  };

  if (session.isLoggedIn === false) {
    return (
      <>
        <Router>
          <div>
            <Navbar
              className="NavbarStyle"
              bg="dark"
              variant={"dark"}
              expand="lg"
            >
              <Navbar.Brand href="#">CACTUS FAMILY</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <div style={{ width: "100%" }}>
                  <Nav
                    className="mr-auto my-2 my-lg-0 justify-content-end"
                    style={{ maxHeight: "100px", width: "100%" }}
                    navbarScroll
                  >
                    <Nav.Link as={Link} to="/home">
                      หน้าหลัก
                    </Nav.Link>
                    <Nav.Link as={Link} to="/cactus">
                      กระบองเพชร
                    </Nav.Link>
                    <Nav.Link as={Link} to="/login">
                      เข้าสู่ระบบ
                    </Nav.Link>
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
              </Route>
              Gymnocalycium
              <Route path="/mammillaria">
                <MammillariaPage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    );
  } else {
    // ถ้า login แล้ว
    return (
      <Router>
        <div>
          <Navbar
            className="NavbarStyle"
            bg="dark"
            variant={"dark"}
            expand="lg"
          >
            <Navbar.Brand href="#">ผู้ดูเเลระบบ</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <div style={{ width: "100%" }}>
                <Nav
                  className="mr-auto my-2 my-lg-0 justify-content-end"
                  style={{ maxHeight: "100px", width: "100%" }}
                  navbarScroll
                >
                  <Nav.Link as={Link} to="/add">
                    เพิ่มข้อมูล
                  </Nav.Link>
                  <Nav.Link as={Link} to="/manage">
                    จัดการ
                  </Nav.Link>
                  <Nav.Link as={Link} to="/picture">
                    รูปภาพ
                  </Nav.Link>
                  <Nav.Link as={Link} to="/logout" onClick={handleLogout}>
                    ออกจากระบบ
                  </Nav.Link>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <Switch>
            <Route path="/picture">
              <PicturePage />
            </Route>
            <Route path="/correct">
              <CorrectPage />
            </Route>
            Correct
            <Route path="/incorrect">
              <IncorrectPage />
            </Route>
            <Route path="/add">
              <AddPage />
            </Route>
            <Route path="/">
              <ManagePage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
