import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

import React, { useEffect, useState } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import { Sidebar } from "primereact/sidebar";
import { Form, Button, Image, Card, Row, Col } from "react-bootstrap";
import {
  getFirestore,
  getDocs,
  collection,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";

import "./ManagePage.css";

import firebaseConfig from "../Firebase/config";
const db = getFirestore(firebaseConfig);
let indexTable = 0;

function ManagePage() {
  const [dataToshowTable, setDataToshowTable] = useState([]);
  const [firestoreData, setFirestoreData] = useState([]);
  const [isGetFirebase, setIsGetFirebase] = useState(false);
  const [isOpenEditForm, setIsOpenEditForm] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const [cactusFamily, setCactusFamily] = useState(""); //ตระกุล
  const [scientificName, setScientificName] = useState(""); //ชื่อทางวิทยา
  const [commonName, setCommonName] = useState(""); //ชื่อทั่วไป
  const [otherNames, setOtherNames] = useState(""); //ชื่ออื่นๆ
  const [family, setFamily] = useState(""); //วงศ์
  const [descriptionImageGrup1, setDescriptionImageGrup1] = useState(""); //คำอธิบายรูปภาพชุดแรก 1-3
  const [descriptionImageGrup2, setDescriptionImageGrup2] = useState(""); //คำอธิบายรูปภาพชุดสอง 4-6
  const [descriptionImageGrup3, setDescriptionImageGrup3] = useState(""); //คำอธิบายรูปภาพชุดสาม 7-9
  const [diseaseDetails1, setDiseaseDetails1] = useState(""); //คำอธิบายรูปภาพโรคที่1
  const [diseaseDetails2, setDiseaseDetails2] = useState(""); //คำอธิบายรูปภาพโรคที่2
  const [diseaseDetails3, setDiseaseDetails3] = useState(""); //คำอธิบายรูปภาพโรคที่3

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

  const [head, setHead] = useState({
    head1: "",
    head2: "",
    head3: "",
    head4: "",
    head5: "",
    head6: "",
  });

  const [reference, setReference] = useState({
    refer1: "",
    refer2: "",
  });

  useEffect(() => {
    const getFirestrore = async () => {
      let index = 1;
      if (isGetFirebase === false) {
        try {
          setDataToshowTable([]);
          setFirestoreData([]);
          const querySnapshot = await getDocs(
            collection(db, "WebCactusInformation")
          );
          querySnapshot.forEach((doc) => {
            var data = {
              id: doc.id,
              index: index,
              name: doc.data().scientificName,
              cactusFamily: doc.data().cactusFamily,
            };
            setDataToshowTable((dataToshowTable) => [...dataToshowTable, data]);
            setFirestoreData((firestoreData) => [...firestoreData, doc.data()]);
            index += 1;
          });
        } catch (e) {
          console.log("Error getting cached document:", e);
        }
      }
    };

    getFirestrore();
    setIsGetFirebase(true);
  }, [
    dataToshowTable,
    isGetFirebase,
    firestoreData,
    scientificName,
    commonName,
    head,
    reference,
  ]);

  const onDelete = async (index) => {
    var documant = dataToshowTable[index - 1].id;
    await deleteDoc(doc(db, "WebCactusInformation", documant));
    setIsGetFirebase(false);
  };

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

    setHead({
      head1: firestoreData[indexTable].head1,
      head2: firestoreData[indexTable].head2,
      head3: firestoreData[indexTable].head3,
      head4: firestoreData[indexTable].head4,
      head5: firestoreData[indexTable].head5,
      head6: firestoreData[indexTable].head6,
    });

    setReference({
      refer1: firestoreData[indexTable].refer1,
      refer2: firestoreData[indexTable].refer2,
    });
  };

  const onEdit = async (index) => {
    indexTable = index - 1;
    setValueToEdit();
    setIsOpenEditForm(true);
  };

  const onUpdate = async () => {
    setIsUpdate(true);
    var documant = dataToshowTable[indexTable].id;
    console.log("head ", head);

    await setDoc(doc(db, "WebCactusInformation", documant), {
      cactusFamily: `${cactusFamily}`,
      imageProfile: `${imageProfile}`,
      scientificName: `${scientificName}`,
      commonName: `${commonName}`,
      otherNames: `${otherNames}`,
      family: `${family}`,
      head1: `${head.head1}`,
      head2: `${head.head2}`,
      head3: `${head.head3}`,
      head4: `${head.head4}`,
      head5: `${head.head5}`,
      head6: `${head.head6}`,
      head7: `${head.head7}`,
      head8: `${head.head8}`,
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
      diseaseDetails3: `${diseaseDetails3}`,
      refer1: `${reference.refer1}`,
      refer2: `${reference.refer2}`,
    });

    setIsOpenEditForm(false);
    setIsGetFirebase(false);
    setValueToEdit();
    setIsUpdate(false);
  };

  if (dataToshowTable.length !== 0) {
    return (
      <div className="bgm">
        <div className="container">
          <Sidebar
          className="bgm"
            visible={isOpenEditForm}
            fullScreen
            onHide={() => setIsOpenEditForm(false)}
          >
            <div>
              <div
                className="container "
                style={{
                  width: "80%",
                  height: "100%",
                  marginBottom: "4%",
                  textAlign: "center",
                }}
              >
                <br />
                <Card border="secondary" style={{ background: "#ECEFF1" }}>
                  <Card.Body>
                    <div>
                    <h3>แก้ไขข้อมูลกระบองเพชร</h3>
                      <Form style={{ textAlign: "start" }}>
                        <Row className="mb-2">
                          <Col>
                            <Form.Select
                              aria-label="select"
                              value={cactusFamily}
                              onChange={(e) => setCactusFamily(e.target.value)}
                            >
                              <option value="0">- เลือกตระกุล -</option>
                              <option value="Mammillaria">แมมมิลลาเรีย</option>
                              <option value="Gymnocalycium">
                                ยิมโนคาไลเซียม
                              </option>
                            </Form.Select>
                          </Col>
                        </Row>
                        <Row>
                          <Col style={{ textAlign: "center" }}>
                            <h5>รูปโปรไฟล์</h5>
                            <Image
                              src={imageProfile}
                              rounded
                              style={{ width: "250px", height: "auto" }}
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col
                            xl
                            lg
                            xxl="4"
                            style={{ textAlign: "center" }}
                          ></Col>
                          <Col style={{ textAlign: "center" }}>
                            <Form.Control
                              className="mt-2 mb-2"
                              disabled={true}
                              style={{ width: "100%", textAlign: "center" }}
                              type="file"
                              onChange={(e) =>
                                setImageProfile([...e.target.files])
                              }
                            />
                          </Col>
                          <Col
                            xl
                            lg
                            xxl="4"
                            style={{ textAlign: "center" }}
                          ></Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Group
                              className="mb-3"
                              controlId="formScientificName"
                            >
                              <Form.Label>ชื่อวิทยาศาสตร์</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="ชื่อวิทยาศาสตร์"
                                value={scientificName}
                                onChange={(e) =>
                                  setScientificName(e.target.value)
                                }
                              />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group
                              className="mb-3"
                              controlId="formCommonName"
                            >
                              <Form.Label>ชื่อสามัญ</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="ชื่อสามัญ"
                                value={commonName}
                                onChange={(e) => setCommonName(e.target.value)}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Group
                              className="mb-3"
                              controlId="formOtherNames"
                            >
                              <Form.Label>ชื่ออื่นๆ</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="ชื่ออื่นๆ"
                                value={otherNames}
                                onChange={(e) => setOtherNames(e.target.value)}
                              />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group className="mb-3" controlId="formFamily">
                              <Form.Label>วงศ์</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="วงศ์"
                                value={family}
                                onChange={(e) => setFamily(e.target.value)}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        {/* ----------------------h1--------------------------- */}
                        <Form.Group className="mb-3" controlId="head1">
                          <Form.Label>หัวข้อ</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="head1"
                            value={head.head1}
                            style={{ width: "49%" }}
                            onChange={(e) =>
                              setHead({
                                head1: e.target.value,
                                head2: head.head2,
                                head3: head.head3,
                                head4: head.head4,
                                head5: head.head5,
                                head6: head.head6,
                              })
                            }
                          />
                        </Form.Group>
                        <Row className="mt-3">
                          <Col style={{ textAlign: "center" }}>
                            <Image
                              src={image1}
                              rounded
                              style={{ width: "210px", height: "auto" }}
                            />
                          </Col>
                          <Col style={{ textAlign: "center" }}>
                            <Image
                              src={image2}
                              rounded
                              style={{ width: "210px", height: "auto" }}
                            />
                          </Col>
                          <Col style={{ textAlign: "center" }}>
                            <Image
                              src={image3}
                              rounded
                              style={{ width: "210px", height: "auto" }}
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Control
                              className="mt-2 styleInput"
                              type="file"
                              disabled={true}
                              onChange={(e) => setImage1([...e.target.files])}
                            />
                          </Col>
                          <Col>
                            <Form.Control
                              className="mt-2 styleInput"
                              type="file"
                              disabled={true}
                              onChange={(e) => setImage2([...e.target.files])}
                            />
                          </Col>
                          <Col>
                            <Form.Control
                              className="mt-2 styleInput"
                              type="file"
                              disabled={true}
                              onChange={(e) => setImage3([...e.target.files])}
                            />
                          </Col>
                        </Row>
                        <Row className="mt-2 mb-3">
                          <Col>
                            <Form.Group
                              className="mb-2"
                              controlId="descriptionImageGrup1"
                            >
                              <Form.Label>คำอธิบาย</Form.Label>
                              <Form.Control
                                as="textarea"
                                rows={10}
                                placeholder="ลักษณะของกระบองเพชร"
                                value={descriptionImageGrup1}
                                onChange={(e) =>
                                  setDescriptionImageGrup1(e.target.value)
                                }
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        {/* -------------------------h2------------------------ */}
                        <Form.Group className="mb-3" controlId="head2">
                          <Form.Label>หัวข้อ</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="head2"
                            value={head.head2}
                            style={{ width: "49%" }}
                            onChange={(e) =>
                              setHead({
                                head1: head.head1,
                                head2: e.target.value,
                                head3: head.head3,
                                head4: head.head4,
                                head5: head.head5,
                                head6: head.head6,
                              })
                            }
                          />
                        </Form.Group>
                        <Row>
                          <Col style={{ textAlign: "center" }}>
                            <Image
                              src={image4}
                              rounded
                              style={{ width: "210px", height: "auto" }}
                            />
                          </Col>
                          <Col style={{ textAlign: "center" }}>
                            <Image
                              src={image5}
                              rounded
                              style={{ width: "210px", height: "auto" }}
                            />
                          </Col>
                          <Col style={{ textAlign: "center" }}>
                            <Image
                              src={image6}
                              rounded
                              style={{ width: "210px", height: "auto" }}
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Control
                              className="mt-2 styleInput"
                              type="file"
                              disabled={true}
                              onChange={(e) => setImage4([...e.target.files])}
                            />
                          </Col>
                          <Col>
                            <Form.Control
                              className="mt-2 styleInput"
                              type="file"
                              disabled={true}
                              onChange={(e) => setImage5([...e.target.files])}
                            />
                          </Col>
                          <Col>
                            <Form.Control
                              className="mt-2 styleInput"
                              type="file"
                              disabled={true}
                              onChange={(e) => setImage6([...e.target.files])}
                            />
                          </Col>
                        </Row>
                        <Row className="mt-2 mb-3">
                          <Col>
                            <Form.Group
                              className="mb-2"
                              controlId="descriptionImageGrup2"
                            >
                              <Form.Label>คำอธิบาย</Form.Label>
                              <Form.Control
                                as="textarea"
                                rows={10}
                                placeholder="คำอธิบายการปลูก"
                                value={descriptionImageGrup2}
                                onChange={(e) =>
                                  setDescriptionImageGrup2(e.target.value)
                                }
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        {/* -----------------------h3-------------------------- */}
                        <Form.Group className="mb-3" controlId="head3">
                          <Form.Label>หัวข้อ</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="head3"
                            value={head.head3}
                            style={{ width: "49%" }}
                            onChange={(e) =>
                              setHead({
                                head1: head.head1,
                                head2: head.head2,
                                head3: e.target.value,
                                head4: head.head4,
                                head5: head.head5,
                                head6: head.head6,
                              })
                            }
                          />
                        </Form.Group>
                        <Row>
                          <Col style={{ textAlign: "center" }}>
                            <Image
                              src={image7}
                              rounded
                              style={{ width: "210px", height: "auto" }}
                            />
                          </Col>
                          <Col style={{ textAlign: "center" }}>
                            <Image
                              src={image8}
                              rounded
                              style={{ width: "210px", height: "auto" }}
                            />
                          </Col>
                          <Col style={{ textAlign: "center" }}>
                            <Image
                              src={image9}
                              rounded
                              style={{ width: "210px", height: "auto" }}
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Control
                              className="mt-2 styleInput"
                              type="file"
                              disabled={true}
                              onChange={(e) => setImage7([...e.target.files])}
                            />
                          </Col>
                          <Col>
                            <Form.Control
                              className="mt-2 styleInput"
                              type="file"
                              disabled={true}
                              onChange={(e) => setImage8([...e.target.files])}
                            />
                          </Col>
                          <Col>
                            <Form.Control
                              className="mt-2 styleInput"
                              type="file"
                              disabled={true}
                              onChange={(e) => setImage9([...e.target.files])}
                            />
                          </Col>
                        </Row>
                        <Row className="mt-2 mb-3">
                          <Col>
                            <Form.Group
                              className="mb-2"
                              controlId="descriptionImageGrup3"
                            >
                              <Form.Label>คำอธิบาย</Form.Label>
                              <Form.Control
                                as="textarea"
                                rows={10}
                                placeholder="คำอธิบายการขยายพันธ์"
                                value={descriptionImageGrup3}
                                onChange={(e) =>
                                  setDescriptionImageGrup3(e.target.value)
                                }
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        {/* -----------------------h4------------------------ */}
                        <Form.Group className="mb-3" controlId="head4">
                          <Form.Label>หัวข้อโรค</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="head4"
                            value={head.head4}
                            style={{ width: "49%" }}
                            onChange={(e) =>
                              setHead({
                                head1: head.head1,
                                head2: head.head2,
                                head3: head.head3,
                                head4: e.target.value,
                                head5: head.head5,
                                head6: head.head6,
                              })
                            }
                          />
                        </Form.Group>
                        <Row>
                          <Col style={{ textAlign: "center" }}>
                            <Image
                              src={imageDisease1}
                              rounded
                              style={{ width: "340px", height: "auto" }}
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col
                            xl
                            lg
                            xxl="3"
                            style={{ textAlign: "center" }}
                          ></Col>
                          <Col>
                            <Form.Control
                              className="mt-2 mb-2 styleInput"
                              type="file"
                              disabled={true}
                              style={{ width: "100%", textAlign: "center" }}
                              onChange={(e) =>
                                setImageDisease1([...e.target.files])
                              }
                            />
                          </Col>
                          <Col
                            xl
                            lg
                            xxl="3"
                            style={{ textAlign: "center" }}
                          ></Col>
                        </Row>
                        <Row className="mt-2 mb-3">
                          <Col>
                            <Form.Group
                              className="mb-2"
                              controlId="diseaseDetails1"
                            >
                              <Form.Label>คำอธิบาย</Form.Label>
                              <Form.Control
                                as="textarea"
                                rows={10}
                                placeholder="คำอธิบายโรคที่1"
                                value={diseaseDetails1}
                                onChange={(e) =>
                                  setDiseaseDetails1(e.target.value)
                                }
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        {/* -------------------------h5---------------------- */}
                        <Form.Group className="mb-3" controlId="head5">
                          <Form.Label>หัวข้อโรค</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="head5"
                            value={head.head5}
                            style={{ width: "49%" }}
                            onChange={(e) =>
                              setHead({
                                head1: head.head1,
                                head2: head.head2,
                                head3: head.head3,
                                head4: head.head4,
                                head5: e.target.value,
                                head6: head.head6,
                              })
                            }
                          />
                        </Form.Group>
                        <Row>
                          <Col style={{ textAlign: "center" }}>
                            <Image
                              src={imageDisease2}
                              rounded
                              style={{ width: "340px", height: "auto" }}
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col
                            xl
                            lg
                            xxl="3"
                            style={{ textAlign: "center" }}
                          ></Col>
                          <Col style={{ textAlign: "center" }}>
                            <Form.Control
                              className="mt-2 mb-2"
                              type="file"
                              disabled={true}
                              style={{ width: "100%", textAlign: "center" }}
                              onChange={(e) =>
                                setImageDisease2([...e.target.files])
                              }
                            />
                          </Col>
                          <Col
                            xl
                            lg
                            xxl="3"
                            style={{ textAlign: "center" }}
                          ></Col>
                        </Row>
                        <Row className="mt-2 mb-3">
                          <Col>
                            <Form.Group
                              className="mb-2"
                              controlId="diseaseDetails2"
                            >
                              <Form.Label>คำอธิบาย</Form.Label>
                              <Form.Control
                                as="textarea"
                                rows={10}
                                placeholder="คำอธิบายโรคที่2"
                                value={diseaseDetails2}
                                onChange={(e) =>
                                  setDiseaseDetails2(e.target.value)
                                }
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        {/* ------------------------h6----------------------- */}
                        <Form.Group className="mb-3" controlId="head6">
                          <Form.Label>หัวข้อโรค</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="head6"
                            value={head.head6}
                            style={{ width: "49%" }}
                            onChange={(e) =>
                              setHead({
                                head1: head.head1,
                                head2: head.head2,
                                head3: head.head3,
                                head4: head.head4,
                                head5: head.head5,
                                head6: e.target.value,
                              })
                            }
                          />
                        </Form.Group>
                        <Row>
                          <Col style={{ textAlign: "center" }}>
                            <Image
                              src={imageDisease3}
                              rounded
                              style={{ width: "340px", height: "auto" }}
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col
                            xl
                            lg
                            xxl="3"
                            style={{ textAlign: "center" }}
                          ></Col>
                          <Col>
                            <Form.Control
                              className="mt-2 mb-2"
                              disabled={true}
                              type="file"
                              onChange={(e) =>
                                setImageDisease3([...e.target.files])
                              }
                            />
                          </Col>
                          <Col
                            xl
                            lg
                            xxl="3"
                            style={{ textAlign: "center" }}
                          ></Col>
                        </Row>
                        <Row className="mt-2 mb-3">
                          <Col>
                            <Form.Group
                              className="mb-2"
                              controlId="diseaseDetails2"
                            >
                              <Form.Label>คำอธิบาย</Form.Label>
                              <Form.Control
                                as="textarea"
                                rows={10}
                                placeholder="คำอธิบายโรคที่3"
                                value={diseaseDetails3}
                                onChange={(e) =>
                                  setDiseaseDetails3(e.target.value)
                                }
                              />
                            </Form.Group>
                          </Col>
                        </Row>

                        <Row>
                          <Col>
                            <Form.Group className="mb-3" controlId="refer1">
                              <Form.Label>แหล่งที่มา</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="แหล่งที่มา"
                                value={reference.refer1}
                                onChange={(e) =>
                                  setReference({
                                    refer1: e.target.value,
                                    refer2: reference.refer2,
                                  })
                                }
                              />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="refer2">
                              <Form.Control
                                type="text"
                                placeholder="แหล่งที่มา"
                                value={reference.refer2}
                                onChange={(e) =>
                                  setReference({
                                    refer1: reference.refer1,
                                    refer2: e.target.value,
                                  })
                                }
                              />
                            </Form.Group>
                          </Col>
                        </Row>

                        <div className="d-flex justify-content-center">
                          <Button
                            className="p-2 m-3 px-4 p-button-info btn-success"
                            style={{ width: "25%" }}
                            disabled={isUpdate}
                            onClick={onUpdate}
                          >
                            <i
                              className="pi pi-upload pt-1 "
                              style={{ float: "left" }}
                            ></i>
                            แก้ไขข้อมูล
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Sidebar>

          <div className="row mb-5">
            <div
              className="table-responsive border mt-5 p-4 bg-light rounded"
              style={{ marginBottom: "50px" }}
            >
              <h2 className="text-left mt-2 mb-5 d-flex align-content-center justify-content-center ">
                จัดการข้อมูลกระบองเพชร
              </h2>

              <table className="table table-hover">
                <thead className="table-borderless table-secondary">
                  <tr>
                    <th scope="col" style={{ width: "10%" }}>
                      ลำดับ
                    </th>
                    <th scope="col" style={{ width: "32%" }}>
                      ชื่อ
                    </th>
                    <th scope="col" style={{ width: "32%" }}>
                      ตระกูล
                    </th>
                    <th scope="col" style={{ width: "8%" }}>
                      แก้ไข
                    </th>
                    <th scope="col" style={{ width: "8%" }}>
                      ลบ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataToshowTable.map((cactus) => {
                    return (
                      <tr key={cactus.id}>
                        <td>{cactus.index}</td>
                        <td>{cactus.name}</td>
                        <td>{cactus.cactusFamily}</td>
                        <td>
                          <button
                            onClick={() => {
                              onEdit(cactus.index);
                            }}
                            type="button"
                            className="btn btn-sm btn-warning ml-2"
                          >
                            แก้ไข
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              onDelete(cactus.index);
                            }}
                            type="button"
                            className="btn btn-sm btn-danger ml-2"
                          >
                            ลบข้อมูล
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <ProgressSpinner
          style={{ width: "70px", height: "70px", marginTop: "250px" }}
          strokeWidth="5"
          fill="var(--surface-ground)"
          animationDuration=".5s"
        />
      </div>
    );
  }
}

export default ManagePage;
