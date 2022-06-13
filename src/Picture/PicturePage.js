import React, { Component } from "react";
import { Card, Container, Row, Col, Button, Image } from "react-bootstrap";

import { Link } from "react-router-dom";

import { Nav } from "react-bootstrap";
import "./PicturePage.css";


export default class PicturePage extends Component {
  render() {
    return (
      <div className="bg">
      <div className="container-fluid ">
        <div className="space">
          <h2 className="pt-7">
            รูปภาพที่ประมวลผล
          </h2>
          <br />
          <div className="mt-2">
            <div className="d-flex align-content-center justify-content-center">
              <Row>
                <Col >
                  <div >
                    <Image
                      className="imageLogo1"
                      rounded="true"
                      src="/Images/correct.png"
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
                <Col >
                  <div >
                    <Image
                      className="imageLogo2"
                      rounded="true"
                      src="/Images/incorrect.png"
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
      </div>
    );
  }
}
