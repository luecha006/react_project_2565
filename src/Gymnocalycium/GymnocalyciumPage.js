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

import './GymnocalyciumPage.css';

import firebaseConfig from '../Firebase/config';
const db = getFirestore(firebaseConfig);
const storage = getStorage(firebaseConfig);
let indexTable = 0;
const Background = '/Images/bg-dark.jpg';

function GymnocalyciumPage() {
    let url = [];

    const [dataToshowTable, setDataToshowTable] = useState([]);
    const [firestoreData, setFirestoreData] = useState([]);
    const [isGetFirebase, setIsGetFirebase] = useState(false);
    const [isOpenPage, setIsOpenEditForm] = useState(false);
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
                       if(doc.data().cactusFamily === 'Gymnocalycium'){
                        var data = {
                            id: doc.id,
                            index: index,
                            name: doc.data().scientificName,
                            cactusFamily: doc.data().cactusFamily,
                            image: doc.data().imageProfile
                        }
                        console.log("data",data);
                        setDataToshowTable(dataToshowTable => [...dataToshowTable, data]);
                        setFirestoreData(firestoreData => [...firestoreData, doc.data()]);
                        index += 1;
                      console.log(dataToshowTable);  
                       }
                    });
                    

                } catch (e) {
                    console.log("Error getting cached document:", e);
                }
            }
        }

        getFirestrore();
        setIsGetFirebase(true);

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

    const readMore = async (index) => {
        indexTable = index - 1;
        setValueToEdit();
        setIsOpenEditForm(true);
    }

    const onUpdate = async () => {
        var documant = dataToshowTable[indexTable].id;

        await setDoc(doc(db, "WebCactusInformation", documant), {
            cactusFamily: `${cactusFamily}`,
            imageProfile: `${imageProfile}`,
            scientificName: `${scientificName}`,
            commonName: `${commonName}`,
            otherNames: `${otherNames}`,
            family: `${family}`,
            image1: `${image1}`,
            image2: `${image2}`,
            image3: `${image3}`,
            descriptionImageGrup1: `${descriptionImageGrup1}`,
            image4: `${image4}`,
            image5: `${image5}`,
            image6: `${image6}`,
            descriptionImageGrup2: `${descriptionImageGrup2}`,
            image7: `${image7}`,
            image8: `${image8}`,
            image9: `${image9}`,
            descriptionImageGrup3: `${descriptionImageGrup3}`,
            imageDisease1: `${imageDisease1}`,
            diseaseDetails1: `${diseaseDetails1}`,
            imageDisease2: `${imageDisease2}`,
            diseaseDetails2: `${diseaseDetails2}`,
            imageDisease3: `${imageDisease3}`,
            diseaseDetails3: `${diseaseDetails3}`
        });

        setIsOpenEditForm(false);
        setIsGetFirebase(false);
        setValueToEdit();
    }

    if (dataToshowTable.length !== 0) {
        return (
            <div className='gymPageSpace bg' style={{backgroundImage: `url(${Background})`}}>
                <div className="container">
                    <Sidebar className='side-bar' visible={isOpenPage}  fullScreen  onHide={() => setIsOpenEditForm(false)}>
                        <div >
                            <div className='container' style={{ width: '100%', height: '100%', marginBottom: '4%', textAlign: 'center' }}>
                                <br />
                                <Card border="secondary" style={{ background: '#ECEFF1' }}>
                                   
                                    <Card.Body>
                                        
                                        <div>
                                            <Form style={{ textAlign: 'start' }}>
                                               
                                                <Row>
                                                    <Col className='colpro' style={{ textAlign: 'left' }}>
                                                       <Image className='imgpro' src={imageProfile}/>
                                                    </Col>
                                                    <Col>
                                                    <div className='nameOf'>
                                                            <h2>ชื่อวิทยาศาสตร์ : <span>{scientificName}</span></h2>
                                                            <h4>ชื่อสามัญ : <span>{commonName}</span></h4>
                                                            <h4>ชื่ออื่นๆ : <span>{otherNames}</span></h4>
                                                            <h4>วงศ์ : <span>{family}</span></h4>
                                                    </div>
                                                    </Col>
                                                </Row>
                    
                                                {/* ------------------------------------------------- */}
                                                
                                                <Row className='des'>
                                                    <h3>ลักษณะทางพฤกษศาสตร์</h3>
                                                    <p>{descriptionImageGrup1}</p>

                                                    <Col style={{ textAlign: 'center' }}>
                                                        <Image className='desPic' src={image1}  />
                                                    </Col>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        <Image className='desPic' src={image2} />
                                                    </Col>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        <Image className='desPic' src={image3}/>
                                                    </Col>
                                                </Row>
                                            
                                                {/* ------------------------------------------------- */}
                                                
                                                <Row className='des'>
                                                    <h3>วิธีการปลูก</h3>
                                                    <p>{descriptionImageGrup2}</p>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        <Image className='desPic' src={image4}/>
                                                    </Col>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        <Image className='desPic' src={image5}/>
                                                    </Col>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        <Image className='desPic' src={image6}/>
                                                    </Col>
                                                </Row>
                                                
                                                {/* ------------------------------------------------- */}
                                               
                                                <Row className='des'>
                                                    <h3>การขยายพันธ์</h3>
                                                    <p>{descriptionImageGrup3}</p>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        <Image className='desPic' src={image7}/>
                                                    </Col>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        <Image className='desPic' src={image8}/>
                                                    </Col>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        <Image className='desPic' src={image9}/>
                                                    </Col>
                                                </Row>
                                                
                                                {/* ----------------------------------------------- */}
                                                
                                                <Row className='des'>
                                                    <h3>โรคเเละปัญหาที่พบบ่อย</h3>
                                                    <p>{diseaseDetails1}</p>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        <Image className='desPic2' src={imageDisease1}/>
                                                    </Col>
                                                </Row>
                                              
                                                {/* ----------------------------------------------- */}
                                                
                                                <Row className='des'>
                                                    <p>{diseaseDetails2}</p>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        <Image className='desPic2' src={imageDisease2}/>
                                                    </Col>
                                                </Row>
                                                
                                                {/* ----------------------------------------------- */}
                                                
                                                <Row className='des'>
                                                    <p>{diseaseDetails3}</p>
                                                    <Col style={{ textAlign: 'center' }}>
                                                        <Image className='desPic2' src={imageDisease3}/>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div >
                        </div>
                    </Sidebar>
                    <div className="row mb5">
                        <span className='head_t'>
                            <h2 className="text-center mt-lg-5 mb-lg-5 text-white " style={{ fontSize: 50}}>Gymnocalycium</h2>
                        </span>
                        <div className="table-responsive border p-4 bg-light rounded" style={{ marginBottom: '50px' }}>
                            <table className="table">
                                <thead className="table-borderless">
                                
                                    <tr>
                                        {/* <th scope="col" style={{ width: '10%', fontSize: 20 }}>NO.</th> */}
                                        <th scope="col" style={{ width: '20%', fontSize: 20 }}>Picture</th>
                                        <th scope="col" style={{ width: '40%', fontSize: 20 }}>Name</th>
                                        <th scope="col" style={{ width: '25%', fontSize: 20 }}>Species</th>
                                        <th scope="col" style={{ width: '15%', fontSize: 20 }}>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataToshowTable.map(cactus => {
                                        return (
                                            <tr key={cactus.id}>
                                                {/* <td scope="row"><h5>{cactus.index}</h5></td> */}
                                                <td><img className='img-list' src={cactus.image}></img></td>
                                                <td><h5 className='info-td'>{cactus.name}</h5></td>
                                                <td><h5 className='info-td'>{cactus.cactusFamily}</h5></td>
                                                <td>
                                                <button onClick={() => {
                                                        readMore(cactus.index)
                                                    }}
                                                        type="button"
                                                        className=" btnt btn btn-md btn-success ml-2">
                                                        Read More
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
            </div>
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

export default GymnocalyciumPage;