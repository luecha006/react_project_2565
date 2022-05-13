import React, { useEffect, useState } from 'react';
import { Form, Button, Image, Card, Row, Col } from 'react-bootstrap';

// import firebaseConfig from '../Firebase/config.js';
import firebaseConfig from '../Firebase/config';
import { collection, addDoc, setDoc, getFirestore, doc } from "firebase/firestore";

export default function AddPage() {

    var sumUrls = [];

    const [cactusFamily, setCactusFamily] = useState(''); //ตระกุล
    const [scientificName, setScientificName] = useState(''); //ชื่อทางวิทยา
    const [commonName, setCommonName] = useState(''); //ชื่อทั่วไป
    const [otherNames, setOtherNames] = useState(''); //ชื่ออื่นๆ
    const [family, setFamily] = useState(''); //วงศ์
    const [descriptionImageGrup1, setDescriptionImageGrup1] = useState(''); //คำอธิบายรูปภาพชุดแรก 1-3
    const [descriptionImageGrup2, setDescriptionImageGrup2] = useState(''); //คำอธิบายรูปภาพชุดสอง 4-6
    const [descriptionImageGrup3, setDescriptionImageGrup3] = useState(''); //คำอธิบายรูปภาพชุดสาม 7-9
    const [diseaseDetails1, setDiseaseDetails1] = useState(''); //คำอธิบายรูปภาพโรคที่1
    const [diseaseDetails2, setDiseaseDetails2] = useState(''); //คำอธิบายรูปภาพโรคที่2
    const [diseaseDetails3, setDiseaseDetails3] = useState(''); //คำอธิบายรูปภาพโรคที่3

    const [imageProfile, setImageProfile] = useState([]);
    const [imageProfileURLs, setImageProfileURLs] = useState([]);

    const [image1, setImage1] = useState([]);
    const [imagesURL1, setImagesURL1] = useState([]);

    const [image2, setImage2] = useState([]);
    const [imagesURL2, setImagesURL2] = useState([]);

    const [image3, setImage3] = useState([]);
    const [imagesURL3, setImagesURL3] = useState([]);

    const [image4, setImage4] = useState([]);
    const [imagesURL4, setImagesURL4] = useState([]);

    const [image5, setImage5] = useState([]);
    const [imagesURL5, setImagesURL5] = useState([]);

    const [image6, setImage6] = useState([]);
    const [imagesURL6, setImagesURL6] = useState([]);

    const [image7, setImage7] = useState([]);
    const [imagesURL7, setImagesURL7] = useState([]);

    const [image8, setImage8] = useState([]);
    const [imagesURL8, setImagesURL8] = useState([]);

    const [image9, setImage9] = useState([]);
    const [imagesURL9, setImagesURL9] = useState([]);

    const [imageDisease1, setImageDisease1] = useState([]);
    const [imageDiseaseURL1, setImagesDiseaseURL1] = useState([]);

    const [imageDisease2, setImageDisease2] = useState([]);
    const [imageDiseaseURL2, setImagesDiseaseURL2] = useState([]);

    const [imageDisease3, setImageDisease3] = useState([]);
    const [imageDiseaseURL3, setImagesDiseaseURL3] = useState([]);

    useEffect(() => {
        if (imageProfile.length < 1);
        else {
            const newImageProfileURLs = [];
            imageProfile.forEach(image => newImageProfileURLs.push(URL.createObjectURL(image)));
            setImageProfileURLs(newImageProfileURLs);
        }
        if (image1.length < 1);
        else {
            const newImagesURL1 = [];
            image1.forEach(image => newImagesURL1.push(URL.createObjectURL(image)));
            setImagesURL1(newImagesURL1);
        }

        if (image2.length < 1);
        else {
            const newImagesURL2 = [];
            image2.forEach(image => newImagesURL2.push(URL.createObjectURL(image)));
            setImagesURL2(newImagesURL2);
        }

        if (image3.length < 1);
        else {
            const newImagesURL3 = [];
            image3.forEach(image => newImagesURL3.push(URL.createObjectURL(image)));
            setImagesURL3(newImagesURL3);
        }
        if (image4.length < 1);
        else {
            const newImagesURL4 = [];
            image4.forEach(image => newImagesURL4.push(URL.createObjectURL(image)));
            setImagesURL4(newImagesURL4);
        }

        if (image5.length < 1);
        else {
            const newImagesURL5 = [];
            image5.forEach(image => newImagesURL5.push(URL.createObjectURL(image)));
            setImagesURL5(newImagesURL5);
        }

        if (image6.length < 1);
        else {
            const newImagesURL6 = [];
            image6.forEach(image => newImagesURL6.push(URL.createObjectURL(image)));
            setImagesURL6(newImagesURL6);
        }
        if (image7.length < 1);
        else {
            const newImagesURL7 = [];
            image7.forEach(image => newImagesURL7.push(URL.createObjectURL(image)));
            setImagesURL7(newImagesURL7);
        }

        if (image8.length < 1);
        else {
            const newImagesURL8 = [];
            image8.forEach(image => newImagesURL8.push(URL.createObjectURL(image)));
            setImagesURL8(newImagesURL8);
        }

        if (image9.length < 1);
        else {
            const newImagesURL9 = [];
            image9.forEach(image => newImagesURL9.push(URL.createObjectURL(image)));
            setImagesURL9(newImagesURL9);
        }

        if (imageDisease1.length < 1);
        else {
            const newImagesDiseaseURL = [];
            imageDisease1.forEach(image => newImagesDiseaseURL.push(URL.createObjectURL(image)));
            setImagesDiseaseURL1(newImagesDiseaseURL);
        }

        if (imageDisease2.length < 1);
        else {
            const newImagesDiseaseURL = [];
            imageDisease2.forEach(image => newImagesDiseaseURL.push(URL.createObjectURL(image)));
            setImagesDiseaseURL2(newImagesDiseaseURL);
        }

        if (imageDisease3.length < 1);
        else {
            const newImagesDiseaseURL = [];
            imageDisease3.forEach(image => newImagesDiseaseURL.push(URL.createObjectURL(image)));
            setImagesDiseaseURL3(newImagesDiseaseURL);
        }


    }, [imageProfile, image1, image2,
        image3, image4, image5,
        image6, image7, image8, image9,
        imageDisease1, imageDisease2, imageDisease3]);

    async function uploadToFirebase() {

        var sumfile = [];
        var sumName = [];

        if ((imageProfile.length !== 0) && (image1.length !== 0) && (image2.length !== 0) && (image3.length !== 0) && (image3.length !== 0)
            && (image4.length !== 0) && (image5.length !== 0) && (image6.length !== 0) && (image7.length !== 0) && (image8.length !== 0)
            && (image9.length !== 0) && (imageDisease1.length !== 0) && (imageDisease2.length !== 0) && (imageDisease3.length !== 0)) {

            sumfile.push(imageProfile[0]);
            sumName.push(imageProfile[0].name);
            sumfile.push(image1[0]);
            sumName.push(image1[0].name);
            sumfile.push(image2[0]);
            sumName.push(image2[0].name);
            sumfile.push(image3[0]);
            sumName.push(image3[0].name);
            sumfile.push(image4[0]);
            sumName.push(image4[0].name);
            sumfile.push(image5[0]);
            sumName.push(image5[0].name);
            sumfile.push(image6[0]);
            sumName.push(image6[0].name);
            sumfile.push(image7[0]);
            sumName.push(image7[0].name);
            sumfile.push(image8[0]);
            sumName.push(image8[0].name);
            sumfile.push(image9[0]);
            sumName.push(image9[0].name);
            sumfile.push(imageDisease1[0]);
            sumName.push(imageDisease1[0].name);
            sumfile.push(imageDisease2[0]);
            sumName.push(imageDisease2[0].name);
            sumfile.push(imageDisease3[0]);
            sumName.push(imageDisease3[0].name);

            const storageRef = firebaseConfig.storage().ref();

            for (let i = 0; i < sumfile.length; i++) { //อัพรูปเก็บ url
                await storageRef.child(`WebAddImages/${sumName[i]}`).put(sumfile[i]).then((snapshot) => {
                    storageRef.child(`WebAddImages/${sumName[i]}`).getDownloadURL().then(function (url) {
                        sumUrls.push(url);
                    });
                });
            }
            await uploadToFirestrore(sumUrls);
            alert('เพิ่มสายพันธุ์เสร็จสิ้น');
        } else {
            alert('กรุณาเลือกรูปภาพให้ครบ!!!');
        }
    }

    async function uploadToFirestrore(url) {
        const db = getFirestore(firebaseConfig);
        console.log('uploadToFirestrore');
        try {
            await setDoc(doc(db, "WebCactusInformation", `${scientificName}`), {
                cactusFamily: `${cactusFamily}`,
                imageProfile: `${url[0]}`,
                scientificName: `${scientificName}`,
                commonName: `${commonName}`,
                otherNames: `${otherNames}`,
                family: `${family}`,
                image1: `${url[1]}`,
                image2: `${url[2]}`,
                image3: `${url[3]}`,
                descriptionImageGrup1: `${descriptionImageGrup1}`,
                image4: `${url[4]}`,
                image5: `${url[5]}`,
                image6: `${url[6]}`,
                descriptionImageGrup2: `${descriptionImageGrup2}`,
                image7: `${url[7]}`,
                image8: `${url[8]}`,
                image9: `${url[9]}`,
                descriptionImageGrup3: `${descriptionImageGrup3}`,
                imageDisease1: `${url[10]}`,
                diseaseDetails1: `${diseaseDetails1}`,
                imageDisease2: `${url[11]}`,
                diseaseDetails2: `${diseaseDetails2}`,
                imageDisease3: `${url[12]}`,
                diseaseDetails3: `${diseaseDetails3}`
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <div className='container' style={{ width: '50%', height: '100%', marginBottom: '4%' }}>
            <br />
            <Card border="secondary" style={{ background: '#ECEFF1' }}>
                <Card.Body>
                    <h2>From</h2>
                    <br />
                    <br />
                    <div>
                        <Form style={{ textAlign: 'start' }}>
                            <Row className='mb-2'>
                                <Col>
                                    <Form.Select aria-label="select" onChange={e => setCactusFamily(e.target.value)}>
                                        <option value="0">เลือกตระกุล</option>
                                        <option value="Mammillaria">Mammillaria</option>
                                        <option value="Gymnocalycium">Gymnocalycium</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ textAlign: 'center' }}>
                                    <Image src={imageProfileURLs} rounded style={{ width: "340px", height: "auto" }} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xl lg xxl="3" style={{ textAlign: 'center' }}></Col>
                                <Col style={{ textAlign: 'center' }}>
                                    <Form.Control style={{ width: '100%', textAlign: 'center' }} className='mt-2 mb-2'
                                        type="file" onChange={e => setImageProfile([...e.target.files])} />
                                </Col>
                                <Col xl lg xxl="3" style={{ textAlign: 'center' }}></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formScientificName">
                                        <Form.Label>ชื่อวิทยาศาสตร์</Form.Label>
                                        <Form.Control type="text" placeholder="ชื่อวิทยาศาสตร์"
                                            onChange={e => setScientificName(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formCommonName">
                                        <Form.Label>ชื่อสามัญ</Form.Label>
                                        <Form.Control type="text" placeholder="ชื่อสามัญ"
                                            onChange={e => setCommonName(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formScientificName">
                                        <Form.Label>ชื่ออื่นๆ</Form.Label>
                                        <Form.Control type="text" placeholder="ชื่อวิทยาศาสตร์"
                                            onChange={e => setOtherNames(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formFamily">
                                        <Form.Label>วงศ์</Form.Label>
                                        <Form.Control type="text" placeholder="วงศ์"
                                            onChange={e => setFamily(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            {/* ------------------------------------------------- */}
                            <h5>ลักษณะของกระบองเพชร</h5>
                            <Row className='mt-3'>
                                <Col style={{ textAlign: 'center' }}>
                                    <Image src={imagesURL1} rounded style={{ width: "210px", height: "auto" }} />
                                </Col>
                                <Col style={{ textAlign: 'center' }}>
                                    <Image src={imagesURL2} rounded style={{ width: "210px", height: "auto" }} />
                                </Col>
                                <Col style={{ textAlign: 'center' }}>
                                    <Image src={imagesURL3} rounded style={{ width: "210px", height: "auto" }} />
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ textAlign: 'center' }}>
                                    <Form.Control className='mt-2 styleInput' type="file"
                                        onChange={e => setImage1([...e.target.files])} />
                                </Col>
                                <Col style={{ textAlign: 'center' }}>
                                    <Form.Control className='mt-2' type="file"
                                        onChange={e => setImage2([...e.target.files])} />
                                </Col>
                                <Col style={{ textAlign: 'center' }}>
                                    <Form.Control className='mt-2' type="file"
                                        onChange={e => setImage3([...e.target.files])} />
                                </Col>
                            </Row>
                            <Row className='mt-2 mb-3'>
                                <Col>
                                    <Form.Group className="mb-2" controlId="natureOfCactus">
                                        <Form.Label>คำอธิบาย</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="ลักษณะของกระบองเพชร"
                                            onChange={e => setDescriptionImageGrup1(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            {/* ------------------------------------------------- */}
                            <h5>การปลูก</h5>
                            <Row>
                                <Col style={{ textAlign: 'center' }}>
                                    <Image src={imagesURL4} rounded style={{ width: "210px", height: "auto" }} />
                                </Col>
                                <Col style={{ textAlign: 'center' }}>
                                    <Image src={imagesURL5} rounded style={{ width: "210px", height: "auto" }} />
                                </Col>
                                <Col style={{ textAlign: 'center' }}>
                                    <Image src={imagesURL6} rounded style={{ width: "210px", height: "auto" }} />
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ textAlign: 'center' }}>
                                    <Form.Control className='mt-2 styleInput' type="file"
                                        onChange={e => setImage4([...e.target.files])} />
                                </Col>
                                <Col style={{ textAlign: 'center' }}>
                                    <Form.Control className='mt-2' type="file"
                                        onChange={e => setImage5([...e.target.files])} />
                                </Col>
                                <Col style={{ textAlign: 'center' }}>
                                    <Form.Control className='mt-2' type="file"
                                        onChange={e => setImage6([...e.target.files])} />
                                </Col>
                            </Row>
                            <Row className='mt-2 mb-3'>
                                <Col>
                                    <Form.Group className="mb-2" controlId="natureOfCactus">
                                        <Form.Label>คำอธิบาย</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="คำอธิบายการปลูก"
                                            onChange={e => setDescriptionImageGrup2(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            {/* ------------------------------------------------- */}
                            <h5>การขยายพันธ์</h5>
                            <Row>
                                <Col style={{ textAlign: 'center' }}>
                                    <Image src={imagesURL7} rounded style={{ width: "210px", height: "auto" }} />
                                </Col>
                                <Col style={{ textAlign: 'center' }}>
                                    <Image src={imagesURL8} rounded style={{ width: "210px", height: "auto" }} />
                                </Col>
                                <Col style={{ textAlign: 'center' }}>
                                    <Image src={imagesURL9} rounded style={{ width: "210px", height: "auto" }} />
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ textAlign: 'center' }}>
                                    <Form.Control className='mt-2 styleInput' type="file"
                                        onChange={e => setImage7([...e.target.files])} />
                                </Col>
                                <Col style={{ textAlign: 'center' }}>
                                    <Form.Control className='mt-2' type="file"
                                        onChange={e => setImage8([...e.target.files])} />
                                </Col>
                                <Col style={{ textAlign: 'center' }}>
                                    <Form.Control className='mt-2' type="file"
                                        onChange={e => setImage9([...e.target.files])} />
                                </Col>
                            </Row>
                            <Row className='mt-2 mb-3'>
                                <Col>
                                    <Form.Group className="mb-2" controlId="natureOfCactus">
                                        <Form.Label>คำอธิบาย</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="คำอธิบายการขยายพันธ์"
                                            onChange={e => setDescriptionImageGrup3(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            {/* ----------------------------------------------- */}
                            <h5>โรคที่1</h5>
                            <Row>
                                <Col style={{ textAlign: 'center' }}>
                                    <Image src={imageDiseaseURL1} rounded style={{ width: "340px", height: "auto" }} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xl lg xxl="3" style={{ textAlign: 'center' }}></Col>
                                <Col style={{ textAlign: 'center' }}>
                                    <Form.Control style={{ width: '100%', textAlign: 'center' }} className='mt-2 mb-2'
                                        type="file" onChange={e => setImageDisease1([...e.target.files])} />
                                </Col>
                                <Col xl lg xxl="3" style={{ textAlign: 'center' }}></Col>
                            </Row>
                            <Row className='mt-2 mb-3'>
                                <Col>
                                    <Form.Group className="mb-2" controlId="natureOfCactus">
                                        <Form.Label>คำอธิบาย</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="คำอธิบายโรคที่1"
                                            onChange={e => setDiseaseDetails1(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            {/* ----------------------------------------------- */}
                            <h5>โรคที่2</h5>
                            <Row>
                                <Col style={{ textAlign: 'center' }}>
                                    <Image src={imageDiseaseURL2} rounded style={{ width: "340px", height: "auto" }} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xl lg xxl="3" style={{ textAlign: 'center' }}></Col>
                                <Col style={{ textAlign: 'center' }}>
                                    <Form.Control style={{ width: '100%', textAlign: 'center' }} className='mt-2 mb-2'
                                        type="file" onChange={e => setImageDisease2([...e.target.files])} />
                                </Col>
                                <Col xl lg xxl="3" style={{ textAlign: 'center' }}></Col>
                            </Row>
                            <Row className='mt-2 mb-3'>
                                <Col>
                                    <Form.Group className="mb-2" controlId="natureOfCactus">
                                        <Form.Label>คำอธิบาย</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="คำอธิบายโรคที่2"
                                            onChange={e => setDiseaseDetails2(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            {/* ----------------------------------------------- */}
                            <h5>โรคที่3</h5>
                            <Row>
                                <Col style={{ textAlign: 'center' }}>
                                    <Image src={imageDiseaseURL3} rounded style={{ width: "340px", height: "auto" }} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xl lg xxl="3" style={{ textAlign: 'center' }}></Col>
                                <Col style={{ textAlign: 'center' }}>
                                    <Form.Control style={{ width: '100%', textAlign: 'center' }} className='mt-2 mb-2'
                                        type="file" onChange={e => setImageDisease3([...e.target.files])} />
                                </Col>
                                <Col xl lg xxl="3" style={{ textAlign: 'center' }}></Col>
                            </Row>
                            <Row className='mt-2 mb-3'>
                                <Col>
                                    <Form.Group className="mb-2" controlId="natureOfCactus">
                                        <Form.Label>คำอธิบาย</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="คำอธิบายโรคที่3"
                                            onChange={e => setDiseaseDetails3(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <div style={{ textAlign: 'center' }}>
                                <Button style={{ width: '50%' }} variant="primary" onClick={uploadToFirebase}>อัพโหลด</Button>
                            </div>
                        </Form>
                    </div>
                </Card.Body>
            </Card>
        </div >
    )
};