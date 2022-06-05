import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import React, { useEffect, useState, useRef } from 'react';
import { Form, Image, Button, Card, Row, Col, Container } from 'react-bootstrap';
import { Toast } from 'primereact/toast';

import firebaseConfig from '../Firebase/config';
import { addDoc, getFirestore, collection } from "firebase/firestore";
import './AddPage.css'
import { Refresh } from '@mui/icons-material';
const Background = '/Images/bg-dark.jpg';

export default function AddPage() {
    // const [sumUrls, setSumUrls] = useState([]);
    const [isUpload, setIsUpload] = useState(false);
    const [cactusFamily, setCactusFamily] = useState(''); //ตระกุล
    const [scientificName, setScientificName] = useState(''); //ชื่อทางวิทยา
    const [commonName, setCommonName] = useState(''); //ชื่อทั่วไป
    const [otherNames, setOtherNames] = useState(''); //ชื่ออื่นๆ
    const [family, setFamily] = useState(''); //วงศ์

    const [head1, setHead1] = useState('');
    const [head2, setHead2] = useState('');
    const [head3, setHead3] = useState('');
    const [head4, setHead4] = useState('');
    const [head5, setHead5] = useState('');
    const [head6, setHead6] = useState('');
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
    const [refer1, setRefer1] = useState('');
    const [refer2, setRefer2] = useState('');

    const toast = useRef(null);

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
        imageDisease1, imageDisease2, imageDisease3, isUpload]);


    function makeid(fileExtension) { // random ชื่อ
        let currentDate = new Date();
        currentDate = currentDate.toISOString("th-TH");
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 60; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result + currentDate + fileExtension.substr(-4);
    }

    async function onUpload() {

        var sumfile = [];
        var sumName = [];
        var sumUrls = [];

        if ((imageProfile.length !== 0) && (image1.length !== 0) && (image2.length !== 0) && (image3.length !== 0) && (image3.length !== 0)
            && (image4.length !== 0) && (image5.length !== 0) && (image6.length !== 0) && (image7.length !== 0) && (image8.length !== 0)
            && (image9.length !== 0) && (imageDisease1.length !== 0) && (imageDisease2.length !== 0) && (imageDisease3.length !== 0)) {

            setIsUpload(true);
            sumfile.push(imageProfile[0]);
            sumName.push(makeid(imageProfile[0].name));
            sumfile.push(image1[0]);
            sumName.push(makeid(image1[0].name));
            sumfile.push(image2[0]);
            sumName.push(makeid(image2[0].name));
            sumfile.push(image3[0]);
            sumName.push(makeid(image3[0].name));
            sumfile.push(image4[0]);
            sumName.push(makeid(image4[0].name));
            sumfile.push(image5[0]);
            sumName.push(makeid(image5[0].name));
            sumfile.push(image6[0]);
            sumName.push(makeid(image6[0].name));
            sumfile.push(image7[0]);
            sumName.push(makeid(image7[0].name));
            sumfile.push(image8[0]);
            sumName.push(makeid(image8[0].name));
            sumfile.push(image9[0]);
            sumName.push(makeid(image9[0].name));
            sumfile.push(imageDisease1[0]);
            sumName.push(makeid(imageDisease1[0].name));
            sumfile.push(imageDisease2[0]);
            sumName.push(makeid(imageDisease2[0].name));
            sumfile.push(imageDisease3[0]);
            sumName.push(makeid(imageDisease3[0].name));



            const storageRef = firebaseConfig.storage().ref();

            // let i = 0;
            // while (sumUrls.length < 13) {
            for (var i = 0; i < sumName.length; i++) { //อัพรูปเก็บ url
                await storageRef.child(`WebAddImages/${sumName[i]}`).put(sumfile[i]).then(async (snapshot) => {
                    await storageRef.child(`WebAddImages/${sumName[i]}`).getDownloadURL().then(function (url) {
                        console.log('count ', i);
                        sumUrls.push(url);
                    });
                });
            }
            console.log('sumUrls.length ', sumUrls.length);
            await uploadToFirestrore(sumUrls);
            toast.current.show({ severity: 'success', summary: 'แจ้งเตือน', detail: 'เพิ่มสายพันธุ์สำเร็จ', life: 3000 });

        } else {
            toast.current.show({ severity: 'warn', summary: 'แจ้งเตือน', detail: 'กรุณาเลือกรูปภาพให้ครบ!!!', life: 3000 });
            setIsUpload(false);
        }
    }

    async function uploadToFirestrore(sumUrls) {
        const db = getFirestore(firebaseConfig);

        try {
            await addDoc(collection(db, "WebCactusInformation"), {
                cactusFamily: `${cactusFamily}`,
                imageProfile: `${sumUrls[0]}`,
                scientificName: `${scientificName}`,
                commonName: `${commonName}`,
                otherNames: `${otherNames}`,
                family: `${family}`,
                head1: `${head1}`,
                head2: `${head2}`,
                head3: `${head3}`,
                head4: `${head4}`,
                head5: `${head5}`,
                head6: `${head6}`,

                image1: `${sumUrls[1]}`,
                image2: `${sumUrls[2]}`,
                image3: `${sumUrls[3]}`,
                descriptionImageGrup1: `${descriptionImageGrup1}`,
                image4: `${sumUrls[4]}`,
                image5: `${sumUrls[5]}`,
                image6: `${sumUrls[6]}`,
                descriptionImageGrup2: `${descriptionImageGrup2}`,
                image7: `${sumUrls[7]}`,
                image8: `${sumUrls[8]}`,
                image9: `${sumUrls[9]}`,
                descriptionImageGrup3: `${descriptionImageGrup3}`,
                imageDisease1: `${sumUrls[10]}`,
                diseaseDetails1: `${diseaseDetails1}`,
                imageDisease2: `${sumUrls[11]}`,
                diseaseDetails2: `${diseaseDetails2}`,
                imageDisease3: `${sumUrls[12]}`,
                diseaseDetails3: `${diseaseDetails3}`,

                refer1: `${refer1}`,
                refer2: `${refer2}`
            });
            setIsUpload(false);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    return (

        <div className='addPageSpace bg container-fluid m-0 mb-6 p-0 ' style={{ backgroundImage: `url(${Background})` }}>
            <div className='container' style={{ width: '70%', height: '100%', marginBottom: '4%' }}>
                <Toast ref={toast} />
                <br />
                <Card className='card-body' >
                    <Card.Body className='card-body' >
                        <h3>เพิ่มข้อมูลกระบองเพชร</h3>
                        <br />
                        <br />
                        <div>
                            <Form style={{ textAlign: 'start' }}>
                                <Row className='mb-2'>
                                    <Col>
                                        <Form.Select aria-label="select" onChange={e => setCactusFamily(e.target.value)}>
                                            <option value="0">- เลือกตระกูล -</option>
                                            <option value="Mammillaria">แมมมิลลาเรีย</option>
                                            <option value="Gymnocalycium">ยิมโนคาไลเซียม</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: 'center' }}>
                                        <h5 className=' font-weight-lighter '>รูปกระบองเพชร</h5>
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
                                            <Form.Control type="text" placeholder="ชื่ออื่นๆ"
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
                                <Row>
                                    <Col className='head mb-0 mt-7'>
                                        <Form.Group controlId="formHead1">
                                            <Form.Label>หัวข้อ</Form.Label>
                                            <Form.Control type="text" placeholder="เพิ่มหัวข้อ"
                                                onChange={e => setHead1(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className='mt-1'>
                                    <Col style={{ textAlign: 'center' }}>
                                        <Image className='addImgDes' src={imagesURL1} />
                                    </Col>
                                    <Col style={{ textAlign: 'center' }}>
                                        <Image className='addImgDes' src={imagesURL2} />
                                    </Col>
                                    <Col style={{ textAlign: 'center' }}>
                                        <Image className='addImgDes' src={imagesURL3} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: 'center' }}>
                                        <Form.Control className='mt-0 styleInput' type="file"
                                            onChange={e => setImage1([...e.target.files])} />
                                    </Col>
                                    <Col style={{ textAlign: 'center' }}>
                                        <Form.Control className='mt-0 styleInput' type="file"
                                            onChange={e => setImage2([...e.target.files])} />
                                    </Col>
                                    <Col style={{ textAlign: 'center' }}>
                                        <Form.Control className='mt-0 styleInput' type="file"
                                            onChange={e => setImage3([...e.target.files])} />
                                    </Col>
                                </Row>
                                <Row className='mt-1'>
                                    <Col>
                                        <Form.Group className="mb-2" controlId="natureOfCactus">
                                            <Form.Label>คำอธิบาย</Form.Label>
                                            <Form.Control as="textarea" rows={10} placeholder="เพิ่มคำอธิบาย"
                                                onChange={e => setDescriptionImageGrup1(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                {/* ------------------------------------------------- */}
                                <Row >
                                    <Col className='head mb-0'>
                                        <Form.Group controlId="formHead2">
                                            <Form.Label>หัวข้อ</Form.Label>
                                            <Form.Control type="text" placeholder="เพิ่มหัวข้อ"
                                                onChange={e => setHead2(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: 'center' }}>
                                        <Image className='addImgDes' src={imagesURL4} />
                                    </Col>
                                    <Col style={{ textAlign: 'center' }}>
                                        <Image className='addImgDes' src={imagesURL5} />
                                    </Col>
                                    <Col style={{ textAlign: 'center' }}>
                                        <Image className='addImgDes' src={imagesURL6} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: 'center' }}>
                                        <Form.Control className='mt-0 styleInput' type="file"
                                            onChange={e => setImage4([...e.target.files])} />
                                    </Col>
                                    <Col style={{ textAlign: 'center' }}>
                                        <Form.Control className='mt-0' type="file"
                                            onChange={e => setImage5([...e.target.files])} />
                                    </Col>
                                    <Col style={{ textAlign: 'center' }}>
                                        <Form.Control className='mt-0' type="file"
                                            onChange={e => setImage6([...e.target.files])} />
                                    </Col>
                                </Row>
                                <Row className='mt-2 mb-3'>
                                    <Col>
                                        <Form.Group className="mb-2" controlId="natureOfCactus">
                                            <Form.Label>คำอธิบาย</Form.Label>
                                            <Form.Control as="textarea" rows={10} placeholder="เพิ่มคำอธิบาย"
                                                onChange={e => setDescriptionImageGrup2(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                {/* ------------------------------------------------- */}

                                <Row>
                                    <Col className='head mb-0'>
                                        <Form.Group className="mb-3" controlId="formHead3">
                                            <Form.Label>หัวข้อ</Form.Label>
                                            <Form.Control type="text" placeholder="เพิ่มหัวข้อ"
                                                onChange={e => setHead3(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: 'center' }}>
                                        <Image className='addImgDes' src={imagesURL7} />
                                    </Col>
                                    <Col style={{ textAlign: 'center' }}>
                                        <Image className='addImgDes' src={imagesURL8} />
                                    </Col>
                                    <Col style={{ textAlign: 'center' }}>
                                        <Image className='addImgDes' src={imagesURL9} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: 'center' }}>
                                        <Form.Control className='mt-0 styleInput' type="file"
                                            onChange={e => setImage7([...e.target.files])} />
                                    </Col>
                                    <Col style={{ textAlign: 'center' }}>
                                        <Form.Control className='mt-0' type="file"
                                            onChange={e => setImage8([...e.target.files])} />
                                    </Col>
                                    <Col style={{ textAlign: 'center' }}>
                                        <Form.Control className='mt-0' type="file"
                                            onChange={e => setImage9([...e.target.files])} />
                                    </Col>
                                </Row>
                                <Row className='mt-2 mb-3'>
                                    <Col>
                                        <Form.Group className="mb-2" controlId="natureOfCactus">
                                            <Form.Label>คำอธิบาย</Form.Label>
                                            <Form.Control as="textarea" rows={10} placeholder="เพิ่มคำอธิบาย"
                                                onChange={e => setDescriptionImageGrup3(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                {/* ------------------------1----------------------- */}
                                <h5>โรคเเละปัญหาที่พบบ่อย</h5>

                                <Row >
                                    <Col className='head '>
                                        <Form.Group controlId="formHead4">
                                            <Form.Control type="text" placeholder="เพิ่มโรคเเละปัญหาที่พบบ่อย"
                                                onChange={e => setHead4(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: 'center' }}>
                                        <Image src={imageDiseaseURL1} rounded style={{ width: "300px", height: "auto" }} />
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
                                <Row className='mt-2 pb-7'>
                                    <Col>
                                        <Form.Group className="mb-2" controlId="natureOfCactus">
                                            <Form.Label>คำอธิบาย</Form.Label>
                                            <Form.Control as="textarea" rows={10} placeholder="เพิ่มคำอธิบาย"
                                                onChange={e => setDiseaseDetails1(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                {/* ------------------------2----------------------- */}
                                <Row >
                                    <Col className='head mb-0'>
                                        <Form.Group controlId="formHead5">
                                            <Form.Control type="text" placeholder="เพิ่มโรคเเละปัญหาที่พบบ่อย"
                                                onChange={e => setHead5(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: 'center' }}>
                                        <Image src={imageDiseaseURL2} rounded style={{ width: "300px", height: "auto" }} />
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
                                <Row className='mt-2 pb-7'>
                                    <Col>
                                        <Form.Group className="mb-2" controlId="natureOfCactus">
                                            <Form.Label>คำอธิบาย</Form.Label>
                                            <Form.Control as="textarea" rows={10} placeholder="เพิ่มคำอธิบาย"
                                                onChange={e => setDiseaseDetails2(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                {/* -----------------------3------------------------ */}
                                <Row >
                                    <Col className='head mb-0'>
                                        <Form.Group controlId="formHead6">
                                            <Form.Control type="text" placeholder="เพิ่มโรคเเละปัญหาที่พบบ่อย"
                                                onChange={e => setHead6(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ textAlign: 'center' }}>
                                        <Image src={imageDiseaseURL3} rounded style={{ width: "300px", height: "auto" }} />
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
                                <Row className='mt-2 pb-7'>
                                    <Col>
                                        <Form.Group className="mb-2" controlId="natureOfCactus">
                                            <Form.Label>คำอธิบาย</Form.Label>
                                            <Form.Control as="textarea" rows={10} placeholder="เพิ่มคำอธิบาย"
                                                onChange={e => setDiseaseDetails3(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                {/* ---------------------------แหล่งอ้างอิง------------------------------ */}
                                <h5>แหล่งที่มาของข้อมูล</h5>

                                <Row className='pb-8 pt-0' >
                                    <Col>
                                        <Form.Group className="mb-3" controlId="refer1">
                                            <Form.Control type="text" placeholder="เพิ่มที่มาของแหล่งข้อมูล"
                                                onChange={e => setRefer1(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group  controlId="refer2">
                                            <Form.Control type="text" placeholder="เพิ่มที่มาของแหล่งข้อมูล"
                                                onChange={e => setRefer2(e.target.value)} />
                                        </Form.Group>
                                    </Col>

                                </Row>
                                {/* -------------------------btn upload------------------------------- */}
                                <div style={{ textAlign: 'center' }}>
                                    <Button className='btn-success p-2 px-4 p-button-info'
                                        style={{ width: '50%' }}
                                        disabled={isUpload}
                                        onClick={onUpload} >
                                        <i className='pi pi-upload pt-1' style={{ float: 'left' }}></i>
                                        {isUpload ? 'กำลังเพิ่มข้อมูล...' : 'เพิ่มข้อมูล'}
                                    </ Button>
                                </div>
                            </Form>
                        </div>
                    </Card.Body>
                </Card>
            </div >
        </div>
    )
};