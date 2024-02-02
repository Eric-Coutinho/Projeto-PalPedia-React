import { useContext, useState } from "react";
import styles from "./styles.module.scss";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { AlertContext } from "../../Context/Alert/index";

import { Link, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import { SECRET } from "../../env";
import axios from "axios";

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
      navigate('/home');

      setMessage(res.data.message);
      setVariant("success");
      setShow(true);
      setEmail("");
      setPassword("");
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
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Endereço de Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control
          type="password"
          placeholder="Senha"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Form.Group>

      <Button variant="primary" type="submit" style={{ marginBlock: "0.8em" }}>
        Entrar
      </Button>

      <div style={{ width: '100%' }}>
        <Link to="/register" style={{ textDecoration: "none", color: "white" }}>
          <Button variant="danger" type="button" style={{ width: '100%' }}>
            Registre-se
          </Button>
        </Link>
      </div>
    </Form>
  );
}
