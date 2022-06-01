import React, { useEffect, useState } from "react";
import firebaseConfig from "../Firebase/config";
import Imgix from "react-imgix";
import { getFirestore, getDocs, collection } from "firebase/firestore";

import "./PicturePage.css";

const db = getFirestore(firebaseConfig);

const PicturePage = () => {
  const [docs, setDocs] = useState([]);

  const [isGetFirebase, setIsGetFirebase] = useState(false);

  // const galleriaService = new PhotoService();

  useEffect(() => {
    const getFirestrore = async () => {
      let index = 1;
      if (isGetFirebase === false) {
        try {
          setDocs([]);

          const querySnapshot = await getDocs(collection(db, "images"));
          querySnapshot.forEach((doc) => {
            setDocs((docs) => [...docs, doc.data().url]);

            // index += 1;
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
    <div className="picture-bg">
      <h2>Incorrect Detect</h2>
      <br/>
      
      <div className="swiper container-fluid ">
      {docs.map(image => (
        <div className="d-flex justify-content-center">
      <Imgix className="Imgix"
        // sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
        src={(image)}
        imgixParams={{
          fit: "crop",
          fm: "jpg"
        }}
        width={300}
        height={400}
      /></div>
    ))}
      </div>
    </div>
  );
};

export default PicturePage;

// {docs && docs.map(doc => ()
