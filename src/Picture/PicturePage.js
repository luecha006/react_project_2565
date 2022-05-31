import React, { useEffect, useState} from 'react';

// import useFirestore from '../hooks/useFirestore';
// import { motion } from 'framer-motion';
import firebaseConfig from '../Firebase/config';
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const db = getFirestore(firebaseConfig);


const PicturePage = () => {

const [docs, setDocs] = useState([]);
const [isGetFirebase, setIsGetFirebase] = useState(false);
  useEffect(() => {
    const getFirestrore = async () => {
        let index = 1;
        if (isGetFirebase === false) {
            try {
              setDocs([]);
               
                const querySnapshot = await getDocs(collection(db, "images"));
                querySnapshot.forEach((doc) => {
                
                    setDocs(docs => [...docs, doc.data().url]);
                    
                    // index += 1;
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
    console.log("******", docs);
}, [docs]);
 
return (
  <div className="img-grid">
    {docs && docs.map(doc => (
      <div className="img-wrap" key={doc} 
        layout
        whileHover={{ opacity: 1 }}s
        
      >
        <img src={doc} alt="uploaded pic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        />
      </div>
    ))}
    
  </div>

//   <View style={{flexDirection: 'row'}}> // wrap list with flexDirection row
//   {docs && docs.map(doc => ( //returning JSX with ()
//     <img
//       style={{
//         height: 80,
//         width: 80,
//         marginTop: 1.5,
//         borderRadius: 7,
//       }}
//       src={doc}
//     />
//   ))}
// </View>


)

}

export default PicturePage;