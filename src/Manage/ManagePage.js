// import React from 'react';


// const ManagePage = () => (
//     <div>
//         <p style={{margin: "8px"}}>Manage Page</p>
//     </div>
// );

// export default ManagePage;

import React, { Component } from 'react';
import firebaseConfig from '../Firebase/config';
import { collection, addDoc, setDoc, getFirestore, doc } from "firebase/firestore";

class ManagePage extends Component {

    constructor(props) {
        super(props);
        this.state = { file1: [], file2: [] };
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.uploadToFirebase = this.uploadToFirebase.bind(this);
    }

    handleChange1(event) {
        const file1 = event.target.files[0];
        this.setState({ file1: file1 });
    }
    handleChange2(event) {
        const file2 = event.target.files[0];
        this.setState({ file2: file2 });
        console.log(this.state.file2);
    }

    async add_link(url) {
        console.log('add link');
        console.log('url is ', url);
        // const db = firebaseConfig.firestore().ref();

        const db = getFirestore(firebaseConfig);

        // auto create document on firebase
        // try {
        //     const docRef = await addDoc(collection(db, "test_add_cactus"){
        //         link1: "3333",
        //         link2: "4444"
        //     });
        //     console.log("Document written with ID: ", docRef.id);
        // } catch (e) {
        //     console.error("Error adding document: ", e);
        // }

        // update data and add data
        try {
            const docRef = await setDoc(doc(db, "test_add_cuctus", "สายพันธุ์ที่6"), {
                link1: this.state.file1.name,
                link2: this.state.file2.name,
                link3: this.state.file1.name,
            });
            console.log("Document written with ID: ", docRef);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    async uploadToFirebase() {
        var sumUrl = [];
        var sumfile = [];
        var sumName = [];

        if ((this.state.file1.length !== 0) && (this.state.file2.length !== 0)) {
            sumfile.push(this.state.file1);
            sumfile.push(this.state.file2);

            sumName.push(this.state.file1.name);
            sumName.push(this.state.file2.name);
            // sumfile.push(this.state);
            console.log('files ', this.state.file1);
            console.log('name ', this.state.file1.name);
            // console.log('sumfile ',sumName[0]);

            const storageRef = firebaseConfig.storage().ref();

            for (let i = 0; i < sumfile.length; i++) {
                console.log('i :', i);
                await storageRef.child(`WebAddImages/${sumName[i]}`).put(sumfile[i]).then((snapshot) => {
                    alert('Uploaded a blob or file!');

                    storageRef.child(`WebAddImages/${sumName[i]}`).getDownloadURL().then(function (url) {
                        sumUrl.push(url);
                        console.log('url is ', sumUrl);
                    });
                });
            }

            await this.add_link(sumUrl);
        } else {
            alert('กรุณาเลือกรูปภาพให้ครบ!!!');
        }
    }


    render() {
        return (
            <div>
                <h1>Firebase Upload Example</h1>
                <input type="file" onChange={this.handleChange1} /><br />
                <br />
                <input type="file" onChange={this.handleChange2} /><br />
                <button onClick={this.uploadToFirebase}>Upload</button>
            </div>
        );
    }
}

export default ManagePage;