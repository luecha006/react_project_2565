import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {InputGroup, FormControl, Button, Container, Row, Col, Card, Carousel } from "react-bootstrap";
import { BsFillChatTextFill, BsFillPhoneFill, BsFillPeopleFill, BsSearch } from "react-icons/bs";

import './HomePage.css';

const Background = '/Images/bg.jpg';
const colbg = '/Images/gymnocalycium.jpg';
export default class HomePage extends Component {
    
    render() {
        let about = (
            "เว็บไซต์ของเราให้ความรู้เกี่ยวกับผู้เริ่มต้นปลูกกระบองเพชรหรือสนใจที่จะศึกษาข้อมูลอีกทั้งเรายังมีแอปพลิเคชันบริการอีกด้วย"
        );

        let application = (
            "แอปพลิเคชันของเราสามารถบอกข้อมูลหรือให้ความรู้เกี่ยวกับกระบองเพชรสายพันธุ์ต่างๆเพียงแค่ถ่ายภาพเท่านั้น"
        );

        let contact = (
            "โทร 092-453-4025 (หญิง) 062-376-2354 (ดิว) ทีมงานพัฒนาแอปพลิเคชันและเว็บไซต์"
        );
        return (
            <div className="container-fluid m-0 mb-6 p-0">
                <Carousel fade>
                <Carousel.Item interval={3000}>
                {/* <div className='SpaceHomePage bg' style={{backgroundImage: `url(${Background})`}}>
                    <div className="row  justify-content-center align-items-center  " >
                        
                    </div>
                    <div className='row justify-content-end align-items-end'>
                        <InputGroup className="SearchStyle " >
                            <FormControl
                                placeholder="ค้นหา"
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                                id='search'
                            />
                            <Button variant="secondary" id="button-addon2">
                            <span className='iconSize-s'>
                                        <BsSearch />
                                    </span>
                            </Button>
                        </InputGroup>
                        <div>
                            <h2 className='text-white font-weight-lighter pt-lg-5'>ยินดีต้อนรับสู่ CACTUS FAMILY</h2>
                            
                        </div>
                        
                    </div>
                </div> */}
                
                <InputGroup className="SearchStyle" >
                            <FormControl
                                placeholder="ค้นหา"
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                                id='search'
                            />
                            <Button variant="secondary" id="button-addon2">
                            <span className='iconSize-s'>
                                        <BsSearch />
                                    </span>
                            </Button>
                        </InputGroup>
                        
    <img
      className="myCol "
      src={Background}
      alt="First slide"
    />
    
    <Carousel.Caption>
                
      <h3 className='text-white'>First slide label</h3>
      <p className='text-white'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
  <InputGroup className="SearchStyle" >
                            <FormControl
                                placeholder="ค้นหา"
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                                id='search'
                            />
                            <Button variant="secondary" id="button-addon2">
                            <span className='iconSize-s'>
                                        <BsSearch />
                                    </span>
                            </Button>
                        </InputGroup>
    <img
      className="myCol"
      src={Background}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className='text-white'>Second slide label</h3>
      <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
  <InputGroup className="SearchStyle" >
                            <FormControl
                                placeholder="ค้นหา"
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                                id='search'
                            />
                            <Button variant="secondary" id="button-addon2">
                            <span className='iconSize-s'>
                                        <BsSearch />
                                    </span>
                            </Button>
                        </InputGroup>
    <img
      className="myCol"
      src={Background}
      alt="Third slide"
    />

    <Carousel.Caption >
      <h3 className='text-white'>Third slide label</h3>
      <p className='text-white'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
                </Carousel>
                {/* --------------------------------------------- */}
                <div className="container-fluid cardStyle" style={{ height: '250px' }}>
                    <Container>
                        <Row>
                            <Col>
                                <Card className='Card'>
                                    <span className='iconSize'>
                                        <BsFillChatTextFill />
                                    </span>

                                    <h4>เกี่ยวกับเรา</h4>
                                    <Card.Body>{about}</Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='Card'>
                                    <span className='iconSize'>
                                        <BsFillPhoneFill />
                                    </span>
                                    <h4>แอปพลิเคชัน</h4>
                                    <Card.Body>{application}</Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='Card'>
                                    <span className='iconSize'>
                                        <BsFillPeopleFill />
                                    </span>
                                    <h4>ติดต่อเรา</h4>
                                    <Card.Body>{contact}</Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
