import { useContext, useState } from "react";
import styles from "./styles.module.scss";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { AlertContext } from "../../Context/Alert/index";

import { Link, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import { SECRET } from "../../env";
import axios from "axios";

import { i18n } from "../../Translate/i18n";

export default function LoginForm() {
  const { setMessage, setShow, setVariant } = useContext(AlertContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formValid()) return;

    const json = {
      email,
      password,
    };

    const jsonCrypt = CryptoJS.AES.encrypt(
      JSON.stringify(json),
      SECRET
    ).toString();
    try {
      var res = await axios.post("http://localhost:8080/api/user/login", {
        jsonCrypt,
      });

      sessionStorage.setItem("token", res.data.token);
      
      setMessage(res.data.message);
      setVariant("success");
      setShow(true);
      setEmail("");
      setPassword("");
      navigate('/');
    } catch (error) {
      setMessage("Erro ao se conectar.");
      setShow(true);
      setVariant("danger");
      console.log(error);
    }
  }

  function formValid() {
    if (!email.includes("@")) {
      setMessage("Insira um e-mail válido");
      setShow(true);
      setVariant("danger");
      return false;
    }
    if (email.length < 6) {
      setMessage("Insira um e-mail válido");
      setShow(true);
      setVariant("danger");
      return false;
    }
    if (password.length < 6) {
      setMessage("Senha inferior a 6 caracteres");
      setShow(true);
      setVariant("danger");
      return false;
    }
    return true;
  }

  return (
    <Form
      className={styles.formulario}
      onSubmit={handleSubmit}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{i18n.t("login.emailAdress")}</Form.Label>
        <Form.Control
          type="email"
          placeholder={i18n.t("login.email")}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{i18n.t("login.password")}</Form.Label>
        <Form.Control
          type="password"
          placeholder={i18n.t("login.password")}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Form.Group>

      <Button variant="primary" type="submit" style={{ marginBlock: "0.8em" }}>
      {i18n.t("login.buttonLogin")}
      </Button>

      <div style={{ width: '100%' }}>
        <Link to="/register" style={{ textDecoration: "none", color: "white" }}>
          <Button variant="danger" type="button" style={{ width: '100%' }}>
          {i18n.t("login.buttonRegister")}
          </Button>
        </Link>
      </div>
    </Form>
  );
}
