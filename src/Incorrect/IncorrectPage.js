import React, { useEffect, useState } from "react";
import firebaseConfig from "../Firebase/config";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { ImArrowLeft2 } from "react-icons/im";
import { getFirestore, getDocs, collection } from "firebase/firestore";

import "./IncorrectPage.css";

const db = getFirestore(firebaseConfig);

const IncorrectPage = () => {
  const [docs, setDocs] = useState([]);

  const [isGetFirebase, setIsGetFirebase] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const getFirestrore = async () => {
      if (isGetFirebase === false) {
        try {
          setDocs([]);

          const querySnapshot = await getDocs(collection(db, "imgNotCollect"));
          querySnapshot.forEach((doc) => {
            setDocs((docs) => [...docs, doc.data().Image]);
          });
        } catch (e) {
          console.log("Error getting cached document:", e);
        }
      }
    };

    getFirestrore();
    setIsGetFirebase(true);
  }, [docs]);

  return (
    <div className="bg ">
    <div className="prePicture">
      <button className="Btn-pic " onClick={() => history.goBack()}>
        <span className="backPage d-flex align-content-center justify-content-center">
          <ImArrowLeft2 />
        </span>
      </button>
      <h2>รูปภาพที่ประมวลผลล้มเหลว</h2>
      <div className="swiper container ">
        {docs.map((image) => (
          <div className="d-flex justify-content-center align-content-center">
            <Image
              className="Imgix"
              src={image}
              rounded
              style={{ width: "300px", height: "400px" }}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default IncorrectPage;
