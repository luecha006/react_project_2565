import React, { Component } from "react";
import { Card, Container, Row, Col, Button, Image } from "react-bootstrap";

import { Link } from "react-router-dom";

import { Nav } from "react-bootstrap";
import "./ContactPage.css";
const Background = "/Images/bg.jpg";

export default class ContactPage extends Component {
  render() {
    return (
      <div className="container-fluid m-0 mb-6 p-0">
        <div
          className="SpaceCactusPage bg"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <h1 className="mt-0 mb-5 pt-lg-5 text-white ">
            เลือกสายพันธุ์ที่สนใจ
          </h1>
          <br />
          <div className="mt-5">
            <div className="d-flex align-content-center justify-content-center">
              <Row>
                <Col className="species1 ">
                  <div className="mb-4">
                    <Image
                      className="imageLogo1"
                      rounded="true"
                      src="/Images/mam-pre.jpg"
                      style={{ width: "50%", height: "50%" }}
                    ></Image>
                  </div>
                  <Button variant="success" style={{ width: "50%" }}>
                    <Nav.Link
                      as={Link}
                      to="/mammillaria"
                      style={{ padding: "0px", margin: "0px", color: "white" }}
                    >
                      แมมมิลลาเรีย
                    </Nav.Link>
                  </Button>
                </Col>
                <Col className="">
                  <div className="mb-4">
                    <Image
                      className="imageLogo2"
                      rounded="true"
                      src="/Images/gymno-pre.jpg"
                      style={{ width: "50%", height: "50%" }}
                    ></Image>
                  </div>
                  <Button variant="success" style={{ width: "50%" }}>
                    <Nav.Link
                      as={Link}
                      to="/gymnocalycium"
                      style={{ padding: "0px", margin: "0px", color: "white" }}
                    >
                      ยิมโนคาไลเซียม
                    </Nav.Link>
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}
