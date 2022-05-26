import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import React, { useEffect, useState } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Sidebar } from 'primereact/sidebar';
import { Form, Button, Image, Card, Row, Col } from 'react-bootstrap';
import { getFirestore, getDocs, collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

import './ManagePage.css';

import firebaseConfig from '../Firebase/config';
const db = getFirestore(firebaseConfig);
const storage = getStorage(firebaseConfig);
let indexTable = 0;

function ManagePage() {
    let url = [];

    const [dataToshowTable, setDataToshowTable] = useState([]);
    const [firestoreData, setFirestoreData] = useState([]);
    const [isGetFirebase, setIsGetFirebase] = useState(false);
    const [isOpenEditForm, setIsOpenEditForm] = useState(false);
    // const [indexTable, setIndexTable] = useState(0);

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

    const [imageProfile, setImageProfile] = useState(null);
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);
    const [image5, setImage5] = useState(null);
    const [image6, setImage6] = useState(null);
    const [image7, setImage7] = useState(null);
    const [image8, setImage8] = useState(null);
    const [image9, setImage9] = useState(null);
    const [imageDisease1, setImageDisease1] = useState(null);
    const [imageDisease2, setImageDisease2] = useState(null);
    const [imageDisease3, setImageDisease3] = useState(null);

    useEffect(() => {
        const getFirestrore = async () => {
            let index = 1;
            if (isGetFirebase === false) {
                try {
                    setDataToshowTable([]);
                    setFirestoreData([]);
                    const querySnapshot = await getDocs(collection(db, "WebCactusInformation"));
                    querySnapshot.forEach((doc) => {
                        var data = {
                            id: doc.id,
                            index: index,
                            name: doc.data().scientificName,
                            cactusFamily: doc.data().cactusFamily
                        }
                        setDataToshowTable(dataToshowTable => [...dataToshowTable, data]);
                        setFirestoreData(firestoreData => [...firestoreData, doc.data()]);
                        index += 1;
                    });

                } catch (e) {
                    console.log("Error getting cached document:", e);
                }
            }
        }

        getFirestrore();
        setIsGetFirebase(true);

        // console.log('dataToshowTable is', dataToshowTable);
        // console.log('firestoreData is', firestoreData);
    }, [dataToshowTable, isGetFirebase, firestoreData, scientificName, commonName]);

    const onDelete = async (index) => {
        var documant = dataToshowTable[index - 1].id;
        await deleteDoc(doc(db, "WebCactusInformation", documant));
        setIsGetFirebase(false);
    }

    const setValueToEdit = () => {
        setImageProfile(firestoreData[indexTable].imageProfile);
        setImage1(firestoreData[indexTable].image1);
        setImage2(firestoreData[indexTable].image2);
        setImage3(firestoreData[indexTable].image3);
        setImage4(firestoreData[indexTable].image4);
        setImage5(firestoreData[indexTable].image5);
        setImage6(firestoreData[indexTable].image6);
        setImage7(firestoreData[indexTable].image7);
        setImage8(firestoreData[indexTable].image8);
        setImage9(firestoreData[indexTable].image9);
        setImageDisease1(firestoreData[indexTable].imageDisease1);
        setImageDisease2(firestoreData[indexTable].imageDisease2);
        setImageDisease3(firestoreData[indexTable].imageDisease3);

        setCactusFamily(firestoreData[indexTable].cactusFamily);
        setFamily(firestoreData[indexTable].family);
        setScientificName(firestoreData[indexTable].scientificName);
        setCommonName(firestoreData[indexTable].commonName);
        setOtherNames(firestoreData[indexTable].otherNames);
        setFamily(firestoreData[indexTable].family);
        setDescriptionImageGrup1(firestoreData[indexTable].descriptionImageGrup1);
        setDescriptionImageGrup2(firestoreData[indexTable].descriptionImageGrup2);
        setDescriptionImageGrup3(firestoreData[indexTable].descriptionImageGrup3);
        setDiseaseDetails1(firestoreData[indexTable].diseaseDetails1);
        setDiseaseDetails2(firestoreData[indexTable].diseaseDetails2);
        setDiseaseDetails3(firestoreData[indexTable].diseaseDetails3);
    }

    const onEdit = async (index) => {
        indexTable = index - 1;
        setValueToEdit();
        setIsOpenEditForm(true);
    }

    const onUpdate = async () => {
        var documant = dataToshowTable[indexTable].id;

        await setDoc(doc(db, "WebCactusInformation", documant), {
            cactusFamily: `${cactusFamily}`,
            imageProfile: `${url[0]}`,
            scientificName: `${scientificName}`,
            commonName: `${commonName}`,
            otherNames: `${otherNames}`,
            family: `${family}`,
            // image1: `${url[1]}`,
            // image2: `${url[2]}`,
            // image3: `${url[3]}`,
            descriptionImageGrup1: `${descriptionImageGrup1}`,
            // image4: `${url[4]}`,
            // image5: `${url[5]}`,
            // image6: `${url[6]}`,
            descriptionImageGrup2: `${descriptionImageGrup2}`,
            // image7: `${url[7]}`,
            // image8: `${url[8]}`,
            // image9: `${url[9]}`,
            descriptionImageGrup3: `${descriptionImageGrup3}`,
            // imageDisease1: `${url[10]}`,
            diseaseDetails1: `${diseaseDetails1}`,
            // imageDisease2: `${url[11]}`,
            diseaseDetails2: `${diseaseDetails2}`,
            // imageDisease3: `${url[12]}`,
            diseaseDetails3: `${diseaseDetails3}`
        });

        setIsOpenEditForm(false);
        setIsGetFirebase(false);
        setValueToEdit();
    }

    if (dataToshowTable.length !== 0) {
        return (
            <>
                <div className="container">
                    <Sidebar visible={isOpenEditForm} fullScreen onHide={() => setIsOpenEditForm(false)}>
                        <div >
                            <div className='container' style={{ width: '60%', height: '100%', marginBottom: '4%', textAlign: 'center' }}>
                                <br />
                                <Card border="secondary" style={{ background: '#ECEFF1' }}>
                                    <Card.Body>
                                        <h2>From Edit</h2>
                                        <br />
                                        <br />
                                        <div>
                                            <Form style={{ textAlign: 'start' }}>
                                                <Row className='mb-2'>
                                                    <Col>
                                                        <Form.Select aria-label="select" value={cactusFamily}
                                                            onChange={e => setCactusFamily(e.target.value)}>
                                                            <option value="0">เลือกตระกุล</option>
                                                            <option value="Mammillaria">Mammillaria</option>
                                                            <option value="Gymnocalycium">Gymnocalycium</option>
                                                        </Form.Select>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        <h5>รูปโปรไฟล์</h5>
                                                        <Image src={imageProfile} rounded style={{ width: "250px", height: "auto" }} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xl lg xxl="4" style={{ textAlign: 'center' }}></Col>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        <Form.Control className='mt-2 mb-2' disabled={true} style={{ width: '100%', textAlign: 'center' }}
                                                            type="file" onChange={e => setImageProfile([...e.target.files])} />
                                                    </Col>
                                                    <Col xl lg xxl="4" style={{ textAlign: 'center' }}></Col>
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
                                                            <Form.Control type="text" placeholder="ชื่อสามัญ" value={commonName}
                                                                onChange={e => setCommonName(e.target.value)} />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Group className="mb-3" controlId="formOtherNames">
                                                            <Form.Label>ชื่ออื่นๆ</Form.Label>
                                                            <Form.Control type="text" placeholder="ชื่ออื่นๆ" value={otherNames}
                                                                onChange={e => setOtherNames(e.target.value)} />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col>
                                                        <Form.Group className="mb-3" controlId="formFamily">
                                                            <Form.Label>วงศ์</Form.Label>
                                                            <Form.Control type="text" placeholder="วงศ์" value={family}
                                                                onChange={e => setFamily(e.target.value)} />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                {/* ------------------------------------------------- */}
                                                <h5>ลักษณะของกระบองเพชร</h5>
                                                <Row className='mt-3'>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        <Image src={image1} rounded style={{ width: "210px", height: "auto" }} />
                                                    </Col>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        <Image src={image2} rounded style={{ width: "210px", height: "auto" }} />
                                                    </Col>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        <Image src={image3} rounded style={{ width: "210px", height: "auto" }} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Control className='mt-2 styleInput' type="file" disabled={true}
                                                            onChange={e => setImage1([...e.target.files])} />
                                                    </Col>
                                                    <Col>
                                                        <Form.Control className='mt-2 styleInput' type="file" disabled={true}
                                                            onChange={e => setImage2([...e.target.files])} />
                                                    </Col>
                                                    <Col>
                                                        <Form.Control className='mt-2 styleInput' type="file" disabled={true}
                                                            onChange={e => setImage3([...e.target.files])} />
                                                    </Col>
                                                </Row>
                                                <Row className='mt-2 mb-3'>
                                                    <Col>
                                                        <Form.Group className="mb-2" controlId="descriptionImageGrup1">
                                                            <Form.Label>คำอธิบาย</Form.Label>
                                                            <Form.Control as="textarea" rows={4} placeholder="ลักษณะของกระบองเพชร"
                                                                value={descriptionImageGrup1}
                                                                onChange={e => setDescriptionImageGrup1(e.target.value)} />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                {/* ------------------------------------------------- */}
                                                <h5>การปลูก</h5>
                                                <Row>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        <Image src={image4} rounded style={{ width: "210px", height: "auto" }} />
                                                    </Col>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        <Image src={image5} rounded style={{ width: "210px", height: "auto" }} />
                                                    </Col>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        <Image src={image6} rounded style={{ width: "210px", height: "auto" }} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col >
                                                        <Form.Control className='mt-2 styleInput' type="file" disabled={true}
                                                            onChange={e => setImage4([...e.target.files])} />
                                                    </Col>
                                                    <Col >
                                                        <Form.Control className='mt-2 styleInput' type="file" disabled={true}
                                                            onChange={e => setImage5([...e.target.files])} />
                                                    </Col>
                                                    <Col>
                                                        <Form.Control className='mt-2 styleInput' type="file" disabled={true}
                                                            onChange={e => setImage6([...e.target.files])} />
                                                    </Col>
                                                </Row>
                                                <Row className='mt-2 mb-3'>
                                                    <Col>
                                                        <Form.Group className="mb-2" controlId="descriptionImageGrup2">
                                                            <Form.Label>คำอธิบาย</Form.Label>
                                                            <Form.Control as="textarea" rows={4} placeholder="คำอธิบายการปลูก" value={descriptionImageGrup2}
                                                                onChange={e => setDescriptionImageGrup2(e.target.value)} />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                {/* ------------------------------------------------- */}
                                                <h5>การขยายพันธ์</h5>
                                                <Row>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        <Image src={image7} rounded style={{ width: "210px", height: "auto" }} />
                                                    </Col>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        <Image src={image8} rounded style={{ width: "210px", height: "auto" }} />
                                                    </Col>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        <Image src={image9} rounded style={{ width: "210px", height: "auto" }} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Control className='mt-2 styleInput' type="file" disabled={true}
                                                            onChange={e => setImage7([...e.target.files])} />
                                                    </Col>
                                                    <Col >
                                                        <Form.Control className='mt-2 styleInput' type="file" disabled={true}
                                                            onChange={e => setImage8([...e.target.files])} />
                                                    </Col>
                                                    <Col >
                                                        <Form.Control className='mt-2 styleInput' type="file" disabled={true}
                                                            onChange={e => setImage9([...e.target.files])} />
                                                    </Col>
                                                </Row>
                                                <Row className='mt-2 mb-3'>
                                                    <Col>
                                                        <Form.Group className="mb-2" controlId="descriptionImageGrup3">
                                                            <Form.Label>คำอธิบาย</Form.Label>
                                                            <Form.Control as="textarea" rows={4} placeholder="คำอธิบายการขยายพันธ์" value={descriptionImageGrup3}
                                                                onChange={e => setDescriptionImageGrup3(e.target.value)} />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                {/* ----------------------------------------------- */}
                                                <h5>โรคที่1</h5>
                                                <Row>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        <Image src={imageDisease1} rounded style={{ width: "340px", height: "auto" }} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xl lg xxl="3" style={{ textAlign: 'center' }}></Col>
                                                    <Col>
                                                        <Form.Control className='mt-2 mb-2 styleInput' type="file" disabled={true}
                                                            style={{ width: '100%', textAlign: 'center' }}
                                                            onChange={e => setImageDisease1([...e.target.files])} />
                                                    </Col>
                                                    <Col xl lg xxl="3" style={{ textAlign: 'center' }}></Col>
                                                </Row>
                                                <Row className='mt-2 mb-3'>
                                                    <Col>
                                                        <Form.Group className="mb-2" controlId="diseaseDetails1">
                                                            <Form.Label>คำอธิบาย</Form.Label>
                                                            <Form.Control as="textarea" rows={4} placeholder="คำอธิบายโรคที่1" value={diseaseDetails1}
                                                                onChange={e => setDiseaseDetails1(e.target.value)} />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                {/* ----------------------------------------------- */}
                                                <h5>โรคที่2</h5>
                                                <Row>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        <Image src={imageDisease2} rounded style={{ width: "340px", height: "auto" }} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xl lg xxl="3" style={{ textAlign: 'center' }}></Col>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        <Form.Control className='mt-2 mb-2' type="file" disabled={true}
                                                            style={{ width: '100%', textAlign: 'center' }}
                                                            onChange={e => setImageDisease2([...e.target.files])} />
                                                    </Col>
                                                    <Col xl lg xxl="3" style={{ textAlign: 'center' }}></Col>
                                                </Row>
                                                <Row className='mt-2 mb-3'>
                                                    <Col>
                                                        <Form.Group className="mb-2" controlId="diseaseDetails2">
                                                            <Form.Label>คำอธิบาย</Form.Label>
                                                            <Form.Control as="textarea" rows={4} placeholder="คำอธิบายโรคที่2" value={diseaseDetails2}
                                                                onChange={e => setDiseaseDetails2(e.target.value)} />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                {/* ----------------------------------------------- */}
                                                <h5>โรคที่3</h5>
                                                <Row>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        <Image src={imageDisease3} rounded style={{ width: "340px", height: "auto" }} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xl lg xxl="3" style={{ textAlign: 'center' }}></Col>
                                                    <Col>
                                                        <Form.Control className='mt-2 mb-2' disabled={true}
                                                            type="file" onChange={e => setImageDisease3([...e.target.files])} />
                                                    </Col>
                                                    <Col xl lg xxl="3" style={{ textAlign: 'center' }}></Col>
                                                </Row>
                                                <Row className='mt-2 mb-3'>
                                                    <Col>
                                                        <Form.Group className="mb-2" controlId="diseaseDetails2">
                                                            <Form.Label>คำอธิบาย</Form.Label>
                                                            <Form.Control as="textarea" rows={4} placeholder="คำอธิบายโรคที่3" value={diseaseDetails3}
                                                                onChange={e => setDiseaseDetails3(e.target.value)} />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>

                                                <div className='d-flex justify-content-center'>
                                                    <Button className='p-2 px-4 p-button-info'
                                                        style={{ width: '50%' }}
                                                        onClick={onUpdate} >
                                                        <i className='pi pi-upload pt-1' style={{ float: 'left' }}></i>
                                                        Update
                                                    </ Button>
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
                                    {dataToshowTable.map(flight => {
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
                <ProgressSpinner style={{ width: '70px', height: '70px', marginTop: '250px' }}
                    strokeWidth="5"
                    fill="var(--surface-ground)"
                    animationDuration=".5s" />
            </div>
        )
    }
}

export default ManagePage;