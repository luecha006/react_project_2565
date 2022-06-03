import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {InputGroup, FormControl, Button, Container, Row, Col, Card} from "react-bootstrap";
import { BsFillChatTextFill, BsFillPhoneFill, BsFillPeopleFill } from "react-icons/bs";

import './HomePage.css';

const Background = '/Images/bg.jpg';
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
                <div className='SpaceHomePage bg' style={{backgroundImage: `url(${Background})`}}>
                    <div className="row  justify-content-center align-items-center  " >
                        <h2 className='text-white font-weight-lighter'>ยินดีต้อนรับสู่ CACTUS FAMILY</h2>
                    </div>
                    <div className='row mt-0 justify-content-center align-items-center'>
                        <InputGroup className="SearchStyle">
                            <FormControl
                                placeholder="ค้นหา"
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                                id='search'
                            />
                            <Button variant="success" id="button-addon2">
                                ค้นหา
                            </Button>
                        </InputGroup>
                    </div>
                </div>
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
