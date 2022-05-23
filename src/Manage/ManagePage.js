import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import React, { useEffect, useState, useRef } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Sidebar } from 'primereact/sidebar';
import { Form, Button, Image, Card, Row, Col } from 'react-bootstrap';
import { getFirestore, getDocs, collection, deleteDoc, doc } from "firebase/firestore";

import './ManagePage.css';

import firebaseConfig from '../Firebase/config';
const db = getFirestore(firebaseConfig);

function ManagePage() {
    var sumUrls = [];

    const [firestoreData, setFirestoreData] = useState([]);
    const [isGetFirebase, setIsGetFirebase] = useState(false);
    const [isOpenEditForm, setIsOpenEditForm] = useState(false);
    const toast = useRef(null);

    const [cactusFamily, setCactusFamily] = useState('xsadsad'); //ตระกุล
    const [scientificName, setScientificName] = useState('dsadasd'); //ชื่อทางวิทยา
    const [commonName, setCommonName] = useState('dasdasd'); //ชื่อทั่วไป
    const [otherNames, setOtherNames] = useState('dsadsad'); //ชื่ออื่นๆ
    const [family, setFamily] = useState('dsadsadsa'); //วงศ์
    const [descriptionImageGrup1, setDescriptionImageGrup1] = useState('dsadasdsa'); //คำอธิบายรูปภาพชุดแรก 1-3
    const [descriptionImageGrup2, setDescriptionImageGrup2] = useState('dsadsad'); //คำอธิบายรูปภาพชุดสอง 4-6
    const [descriptionImageGrup3, setDescriptionImageGrup3] = useState('dsadasd'); //คำอธิบายรูปภาพชุดสาม 7-9
    const [diseaseDetails1, setDiseaseDetails1] = useState('dsadsad'); //คำอธิบายรูปภาพโรคที่1
    const [diseaseDetails2, setDiseaseDetails2] = useState('dsadsad'); //คำอธิบายรูปภาพโรคที่2
    const [diseaseDetails3, setDiseaseDetails3] = useState('dsdadsa'); //คำอธิบายรูปภาพโรคที่3

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
        const getFirestrore = async () => {
            // console.log('start useEffect');
            let index = 1;
            if (isGetFirebase === false) {
                // console.log('isGetFirebase start', isGetFirebase);
                try {
                    setFirestoreData([]);
                    const querySnapshot = await getDocs(collection(db, "test"));
                    querySnapshot.forEach((doc) => {
                        var flightdata = {
                            id: doc.id,
                            index: index,
                            name: doc.data().name,
                            cactusFamily: doc.data().lastName
                        }
                        setFirestoreData(firestoreData => [...firestoreData, flightdata]);
                        index += 1;

                        // console.log('flightdata :',flightdata);
                    });

                } catch (e) {
                    console.log("Error getting cached document:", e);
                }
                // console.log('isGetFirebase end', isGetFirebase);
            }
            console.log('firestoreData is ', firestoreData);
        }

        getFirestrore();
        setIsGetFirebase(true);
        // console.log('end useEffect');
    }, [firestoreData, isGetFirebase]);


    const onDelete = async (index) => {
        var documant = firestoreData[index - 1].id;
        // console.log('documant ', documant);
        await deleteDoc(doc(db, "test", documant));
        // showSuccess();
        setIsGetFirebase(false);
    }

    const onEdit = async (index) => {
        setIsOpenEditForm(true);
        console.log('onEdit ', index)
    }

    const onUpdate = () => {

    }

    if (firestoreData.length !== 0) {
        return (
            <>
                <div className="container">
                    <Sidebar visible={isOpenEditForm} fullScreen onHide={() => setIsOpenEditForm(false)}>
                        <div >
                            <div className='container' style={{ width: '50%', height: '100%', marginBottom: '4%', textAlign: 'center' }}>
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
                                                            <Form.Control type="text" placeholder="ชื่อวิทยาศาสตร์" value={scientificName}
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
                                                    <Button style={{ width: '50%' }} variant="primary" onClick={onUpdate}>อัพโหลด</Button>
                                                </div>
                                            </Form>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div >
                        </div>
                    </Sidebar>
                    <div className="row mb5">
                        <span className='p-0' style={{ textAlign: 'start' }}>
                            <h2 className="text-left mt-2 ">จัดการ</h2>
                        </span>
                        <div className="table-responsive border p-4 bg-light rounded" style={{ marginBottom: '50px' }}>
                            <table className="table table-hover">
                                <thead className="table-borderless table-secondary">
                                    <tr>
                                        <th scope="col" style={{ width: '10%' }}>ลำดับ</th>
                                        <th scope="col" style={{ width: '32%' }}>ชื่อ</th>
                                        <th scope="col" style={{ width: '32%' }}>ตระกุล</th>
                                        <th scope="col" style={{ width: '8%' }}>แก้ไข</th>
                                        <th scope="col" style={{ width: '8%' }}>ลบ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {firestoreData.map(flight => {
                                        return (
                                            <tr key={flight.id}>
                                                <td scope="row">{flight.index}</td>
                                                <td>{flight.name}</td>
                                                <td>{flight.cactusFamily}</td>
                                                <td>
                                                    <button onClick={() => {
                                                        onEdit(flight.index)
                                                    }}
                                                        type="button"
                                                        className="btn btn-sm btn-warning ml-2">
                                                        Edit
                                                    </button>
                                                </td>
                                                <td>
                                                    <button onClick={() => {
                                                        onDelete(flight.index);
                                                    }}
                                                        type="button"
                                                        className="btn btn-sm btn-danger ml-2">
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <div className='container'>
                {/* <p>Loading...</p> */}
                <ProgressSpinner style={{ width: '70px', height: '70px', marginTop: '250px' }}
                    strokeWidth="5"
                    fill="var(--surface-ground)"
                    animationDuration=".5s" />
            </div>
        )
    }
}

export default ManagePage;