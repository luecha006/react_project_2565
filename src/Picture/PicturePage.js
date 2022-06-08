import React, { Component } from "react";
import { Card, Container, Row, Col, Button, Image } from "react-bootstrap";

import { Link } from "react-router-dom";

import { Nav } from "react-bootstrap";
import "./PicturePage.css";


export default class PicturePage extends Component {
  render() {
    return (
      <div className="container-fluid m-0  p-0">
        <div
          className="SpaceCactusPage bg">
          <h1 className="mt-0 mb-5 pt-lg-5 ">
            รูปภาพที่ประมวลผล
          </h1>
          <br />
          <div className="mt-5">
            <div className="d-flex align-content-center justify-content-center">
              <Row>
                <Col >
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
                      to="/correct"
                      style={{ padding: "0px", margin: "0px", color: "white" }}
                    >
                      รูปภาพที่ประมวลผลสำเร็จ
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
                      to="/incorrect"
                      style={{ padding: "0px", margin: "0px", color: "white" }}
                    >
                      รูปภาพที่ประมวลผลล้มเหลว
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
