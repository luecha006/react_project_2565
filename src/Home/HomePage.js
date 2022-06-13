import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  InputGroup,
  FormControl,
  Button,
  Container,
  Row,
  Col,
  Card,
  Carousel,
} from "react-bootstrap";
import {
  BsFillChatTextFill,
  BsFillPhoneFill,
  BsFillPeopleFill,
  BsSearch,
} from "react-icons/bs";

import "./HomePage.css";

const Background = "/Images/bg-cal.jpg";
const sun = "/Images/sun.png";
const care = "/Images/growth.png";
const water = "/Images/watering-plants.png";
const cal3 = "/Images/cal3.jpg";
const cal4 = "/Images/cal4.jpg";
const cal5 = "/Images/cal5.jpg";
const cal6 = "/Images/cal6.jpg";
const cal7 = "/Images/cal7.jpg";
const cal8 = "/Images/cal8.jpg";
export default class HomePage extends Component {
  render() {
    let about =
      "เว็บไซต์ของเราให้ความรู้เกี่ยวกับผู้เริ่มต้นปลูกกระบองเพชรหรือสนใจที่จะศึกษาข้อมูลอีกทั้งเรายังมีแอปพลิเคชันบริการอีกด้วย";

    let application =
      "แอปพลิเคชันของเราสามารถบอกข้อมูลหรือให้ความรู้เกี่ยวกับกระบองเพชรสายพันธุ์ต่างๆเพียงแค่ถ่ายภาพเท่านั้น";

    let contact =
      "โทร 092-453-4025 (หญิง) 062-376-2354 (ดิว) ทีมงานพัฒนาแอปพลิเคชันและเว็บไซต์";
    return (
      <div className="container-fluid m-0 mb-7 p-0">
        <div className="d-flex align-content-center justify-content-end ">
          <InputGroup className="SearchStyle ">
            <FormControl
              placeholder="ค้นหา"
              aria-label="Search"
              aria-describedby="basic-addon2"
              id="search"
            />
            <Button variant="secondary" id="button-addon2">
              <span className="iconSize-s">
                <BsSearch />
              </span>
            </Button>
          </InputGroup>
        </div>
        <div>
          <Carousel fade>
            <Carousel.Item interval={8000}>
              <img className="myCol " src={Background} alt="First slide" />

              <Carousel.Caption>
                <h3 className="text-white">
                  ยินดีต้อนรับสู่เว็บไซต์ แคคตัส เเฟมิลี
                </h3>
                <p className="text-white">
                  เว็บไซต์ของเราเป็นเว็บที่รวบรวมข้อมูลเกี่ยวกับต้นกระบองเพชรเพื่อให้ความรู้กับผู้ที่กำลังเริ่มศึกษาเกี่ยวกับการปลูกกระบองเพชรหรือผู้ที่ปลูกอยู่เเล้ว
                  และอยากจะหาข้อมูลเพิ่มเติม
                  เพื่อพัฒนาให้ต้นกระบองเพชรของคุณมีความสมบูรณ์มากยิ่งขึ้น
                </p>
                <Row className="d-flex align-content-center justify-content-center ">
                  <img className="imgCal1 " src={cal4}></img>
                  <img className="imgCal1 " src={cal3}></img>
                  <img className="imgCal1 " src={cal5}></img>
                </Row>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={8000}>
              <img className="myCol" src={Background} alt="Second slide" />
              <Carousel.Caption>
                <h3 className="text-white">
                  มาทำความรู้จักกับกระบองเพชรกันเถอะ
                </h3>
                <p className="text-white">
                  กระบองเพชร หรือ แคคตัส เป็นพืชใบเลี้ยงคู่ในวงศ์ Cactaceae
                  มีถิ่นกำเนิดในทรีปอเมริกาเหนือและอเมริกาใต้ มีจำนวน 1,210 ชนิด
                  118 สกุล ลักษณะเด่น คือเป็นไม้ที่มีหนามตามลำต้น และไม่มีใบ
                  แต่จริงๆ แล้วกระบองเพชรก็มีใบเหมือนต้นไม้อื่นๆ
                  แต่ต้องปรับตัวกับอากาศที่มีความร้อนสูง
                  จึงทำให้ต้องสะสมน้ำเอาไว้ที่ลำต้น จึงเหลือแค่หนามเอาไว้
                  เพื่อความอยู่รอดในทะเลทรายที่แห้งแล้ง
                  กระบองเพชรเป็นต้นไม้ที่กำลังได้รับความนิยมอย่างมากในไทย
                  ด้วยความสวยและแปลกตา แถมยังเลี้ยงดูง่ายไม่ต้องดูแลมาก
                  ถ้าใครปลูกอย่างถูกวิธีก็จะมีดอกสวยๆให้เราได้ชมกัน
                  นอกจากกระบองเพชรจะปลูกเอาไว้เพื่อความสวยงามแล้ว
                  ยังสามารถหารายได้ได้อีกด้วย ถือว่าเป็นไม้ที่น่าสนใจจริงๆ
                </p>
                <Row className="d-flex align-content-center justify-content-center ">
                  <img className="imgCal1 " src={cal6}></img>
                  <img className="imgCal1 " src={cal7}></img>
                  <img className="imgCal1 " src={cal8}></img>
                </Row>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={8000}>
              <img className="myCol" src={Background} alt="Third slide" />
              <Carousel.Caption>
                <h3 className="text-white">
                  มือใหม่อยากปลูกกระบองเพชร ต้องเริ่มต้นอย่างไร?
                </h3>
                <p className="text-white">
                  การเริ่มต้นปลูกกระบองเพชรนั้นไม่ยาก แต่สำหรับมือใหม่ก็ไม่ง่าย
                  เพราะถึงเเม้จะเป็นพืชที่ทนต่อสภาพอากาศที่เลวร้ายได้
                  แต่ก็ไม่ใช่ว่าจะเอาไปปลูกไว้กลางเเดดได้ตลอดทั้งวัน
                  การให้กระบองเพชรได้รับเเดดเเละความชุ่มชื้นที่เหมาะสมถือเป็นเรื่องสำคัญ
                  รวมไปถึงดินเเละการให้ปุ๋ยบำรุง
                  จึงควรต้องศึกษาข้อมูลเกี่ยวกับการปลูกต้นกระบองเพชรเเต่ละสายพันธุ์ให้เข้าใจ
                </p>
                <Row className="d-flex align-content-center justify-content-center ">
                  <img className="imgCal rounded" src={water}></img>
                  <img className="imgCal rounded" src={sun}></img>
                  <img className="imgCal rounded" src={care}></img>
                </Row>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        {/* --------------------------------------------- */}
        <div className="container-fluid cardStyle" style={{ height: "250px" }}>
          <Container>
            <Row>
              <Col>
                <Card className="Card">
                  <span className="iconSize">
                    <BsFillChatTextFill />
                  </span>

                  <h4>เกี่ยวกับเรา</h4>
                  <Card.Body>{about}</Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="Card">
                  <span className="iconSize">
                    <BsFillPhoneFill />
                  </span>
                  <h4>แอปพลิเคชัน</h4>
                  <Card.Body>{application}</Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="Card">
                  <span className="iconSize">
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
    );
  }
}
