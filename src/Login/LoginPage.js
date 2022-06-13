import React, { useEffect, useState, useRef } from "react";
import { Form, Button, Card, Image } from "react-bootstrap";
import { Toast } from "primereact/toast";
import "./LoginPage.css";

import firebaseConfig from "../Firebase/config";
const Background = "/Images/bg-fade.jpg";

const LoginPage = ({ setSession }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const toast = useRef(null);

  useEffect(() => {}, [email, password, checkbox, isLogin]);

  const headleLogin = (e) => {
    e.preventDefault();

    firebaseConfig
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("OK");
        const user = userCredential.user;
        console.log("user ", user.email);

        setSession({
          isLoggedIn: true,
          currentUser: user,
        });

        setIsLogin(true);
        console.log(isLogin);
      })
      .catch((error) => {
        console.log("No");
        toast.current.show({
          severity: "warn",
          summary: "แจ้งเตือน",
          detail: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
          life: 3000,
        });
      });
  };

  return (
    <div className="container-fluid m-0 mb-6 p-0">
      <div
        className="loginPageSpace bg"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div
          id="loing_page"
          className="container mb-7"
          style={{ width: "30%", height: "100%" }}
        >
          <Toast ref={toast} />
          <br />
          <br />
          <br />
          <Card style={{ background: "#ECEFF1" }}>
            <Card.Body>
              <Image
                src="/Images/login.png"
                style={{ width: 100, heigh: 100 }}
              ></Image>
              <h3 className="text-secondary">เข้าสู่ระบบ</h3>
              <br />
              <div>
                <Form style={{ textAlign: "start" }}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>อีเมล</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="กรอกอีเมล"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>รหัสผ่าน</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="กรอกรหัสผ่าน"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 p-text-secondary"
                    controlId="formBasicCheckbox"
                  >
                    <Form.Check
                      type="checkbox"
                      label="จดจำรหัสผู้ใช้งาน"
                      onChange={(e) => setCheckbox(e.target.checked)}
                    />
                  </Form.Group>
                  <Button
                    variant="success"
                    type="submit"
                    style={{ width: "100%" }}
                    onClick={headleLogin}
                  >
                    เข้าสู่ระบบ
                  </Button>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
